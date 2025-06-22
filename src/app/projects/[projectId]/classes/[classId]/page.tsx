
"use client";

import { useState } from "react";
import PageLayout from "@/app/pageLayout";
import { Button } from "@/components/UI/button";
import { Plus, UserCheck, UserX, Edit, Calendar, Trash2, X } from "lucide-react";
import AddStudentModal from "@/components/Modals/AddStudentModal";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  attendance: Record<string, boolean>; // date -> isPresent
}

interface CustomDate {
  id: string;
  label: string;
  date: string;
}

interface ClassData {
  classId: string;
  address: string;
  startDate: { beginDate: string; endDate: string };
  time: { beginAt: string; finishAt: string };
  presenceList: string;
  status: string;
  teacher: string;
  students: Student[];
  customDates: CustomDate[];
}

const ClassDiary = ({ params }: { params: { projectId: string; classId: string } }) => {
  const { projectId, classId } = params;
  
  const [viewMode, setViewMode] = useState<'sheet' | 'summary'>('sheet');
  const [newDateLabel, setNewDateLabel] = useState("");
  const [newDateValue, setNewDateValue] = useState("");
  
  // Mock data with custom dates
  const [classData, setClassData] = useState<ClassData>({
    classId: "T848",
    address: "Rua Augusta, 123 - São Paulo, SP",
    startDate: { beginDate: "01/10", endDate: "07/10" },
    time: { beginAt: "08:00", finishAt: "12:00" },
    presenceList: "ZL",
    status: "confirmado",
    teacher: "Prof. Maria Silva",
    customDates: [
      { id: "1", label: "Aula 1", date: "2024-01-15" },
      { id: "2", label: "Aula 2", date: "2024-01-22" },
      { id: "3", label: "Aula 3", date: "2024-01-29" },
      { id: "4", label: "Prova 1", date: "2024-02-05" },
      { id: "5", label: "Aula 4", date: "2024-02-12" },
    ],
    students: [
      { 
        id: "1", 
        name: "João Silva", 
        email: "joao@email.com", 
        phone: "(11) 99999-9999", 
        attendance: {
          "1": true,
          "2": true,
          "3": false,
          "4": true,
          "5": true,
        }
      },
      { 
        id: "2", 
        name: "Maria Santos", 
        email: "maria@email.com", 
        phone: "(11) 88888-8888", 
        attendance: {
          "1": false,
          "2": true,
          "3": true,
          "4": false,
          "5": true,
        }
      },
      { 
        id: "3", 
        name: "Pedro Costa", 
        email: "pedro@email.com", 
        phone: "(11) 77777-7777", 
        attendance: {
          "1": true,
          "2": true,
          "3": true,
          "4": true,
          "5": false,
        }
      },
      { 
        id: "4", 
        name: "Ana Oliveira", 
        email: "ana@email.com", 
        phone: "(11) 66666-6666", 
        attendance: {
          "1": true,
          "2": false,
          "3": false,
          "4": true,
          "5": true,
        }
      },
    ]
  });

  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);

  const toggleAttendance = (studentId: string, dateId: string) => {
    setClassData(prev => ({
      ...prev,
      students: prev.students.map(student =>
        student.id === studentId
          ? { 
              ...student, 
              attendance: {
                ...student.attendance,
                [dateId]: !student.attendance[dateId]
              }
            }
          : student
      )
    }));
  };

  const addStudent = (studentData: { name: string; email: string; phone: string }) => {
    const newStudent: Student = {
      id: Date.now().toString(),
      ...studentData,
      attendance: classData.customDates.reduce((acc, date) => ({
        ...acc,
        [date.id]: false
      }), {})
    };
    
    setClassData(prev => ({
      ...prev,
      students: [...prev.students, newStudent]
    }));
  };

  const deleteStudent = (studentId: string) => {
    setClassData(prev => ({
      ...prev,
      students: prev.students.filter(student => student.id !== studentId)
    }));
  };

  const addCustomDate = () => {
    if (newDateLabel.trim() && newDateValue.trim()) {
      const newDate: CustomDate = {
        id: Date.now().toString(),
        label: newDateLabel.trim(),
        date: newDateValue
      };
      
      setClassData(prev => ({
        ...prev,
        customDates: [...prev.customDates, newDate],
        students: prev.students.map(student => ({
          ...student,
          attendance: {
            ...student.attendance,
            [newDate.id]: false
          }
        }))
      }));
      
      setNewDateLabel("");
      setNewDateValue("");
    }
  };

  const deleteCustomDate = (dateId: string) => {
    setClassData(prev => ({
      ...prev,
      customDates: prev.customDates.filter(date => date.id !== dateId),
      students: prev.students.map(student => {
        const newAttendance = { ...student.attendance };
        delete newAttendance[dateId];
        return {
          ...student,
          attendance: newAttendance
        };
      })
    }));
  };

  const getStudentStats = (student: Student) => {
    const attendanceValues = Object.values(student.attendance);
    const totalDays = attendanceValues.length;
    const presentDays = attendanceValues.filter(isPresent => isPresent).length;
    const absentDays = totalDays - presentDays;
    const attendanceRate = totalDays > 0 ? (presentDays / totalDays) * 100 : 0;
    
    return { totalDays, presentDays, absentDays, attendanceRate };
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: '2-digit' 
    });
  };

  return (
    <>
      <PageLayout pageTitle={`Diário de Classe - ${classData.classId}`}>
        <div className="space-y-6">
          {/* Class Info Header */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Turma {classData.classId}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{classData.address}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Professor: {classData.teacher}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {classData.startDate.beginDate} - {classData.startDate.endDate}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {classData.time.beginAt} às {classData.time.finishAt}
                </p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  classData.status === 'confirmado' ? 'bg-green-100 text-green-800' :
                  classData.status === 'cancelado' ? 'bg-red-100 text-red-800' :
                  classData.status === 'agendado' ? 'bg-orange-100 text-orange-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {classData.status}
                </span>
              </div>
            </div>
          </div>

          {/* Add Custom Date */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Adicionar Nova Data
            </h3>
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nome da Aula/Evento
                </label>
                <input
                  type="text"
                  value={newDateLabel}
                  onChange={(e) => setNewDateLabel(e.target.value)}
                  placeholder="Ex: Aula 1, Prova Final, etc."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orangeSupport dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Data
                </label>
                <input
                  type="date"
                  value={newDateValue}
                  onChange={(e) => setNewDateValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orangeSupport dark:bg-gray-700 dark:text-white"
                />
              </div>
              <Button
                onClick={addCustomDate}
                disabled={!newDateLabel.trim() || !newDateValue.trim()}
                className="bg-orangeSupport hover:bg-orangeSupport/90"
              >
                Adicionar
              </Button>
            </div>
          </div>

          {/* View Toggle and Controls */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Controle de Presença
                </h3>
                <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('sheet')}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      viewMode === 'sheet' 
                        ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' 
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    Planilha
                  </button>
                  <button
                    onClick={() => setViewMode('summary')}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      viewMode === 'summary' 
                        ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' 
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    Resumo
                  </button>
                </div>
              </div>
              <Button
                onClick={() => setIsAddStudentModalOpen(true)}
                className="bg-orangeSupport hover:bg-orangeSupport/90 flex items-center gap-2"
              >
                <Plus size={16} />
                Adicionar Aluno
              </Button>
            </div>

            {viewMode === 'sheet' ? (
              /* Attendance Sheet View */
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-medium text-gray-900 dark:text-white">
                        Aluno
                      </th>
                      {classData.customDates.map((customDate) => (
                        <th key={customDate.id} className="border border-gray-300 dark:border-gray-600 p-3 text-center font-medium text-gray-900 dark:text-white min-w-[120px] group">
                          <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1 mb-1">
                              <span className="text-sm font-medium">
                                {customDate.label}
                              </span>
                              <button
                                onClick={() => deleteCustomDate(customDate.id)}
                                className="text-red-500 hover:text-red-700 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                title="Excluir data"
                              >
                                <X size={14} />
                              </button>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {formatDate(customDate.date)}
                            </span>
                          </div>
                        </th>
                      ))}
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-center font-medium text-gray-900 dark:text-white">
                        Total
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-center font-medium text-gray-900 dark:text-white">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {classData.students.map((student) => {
                      const stats = getStudentStats(student);
                      return (
                        <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="border border-gray-300 dark:border-gray-600 p-3">
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white">
                                {student.name}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {student.email}
                              </div>
                            </div>
                          </td>
                          {classData.customDates.map((customDate) => {
                            const isPresent = student.attendance[customDate.id];
                            return (
                              <td key={customDate.id} className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                                <button
                                  onClick={() => toggleAttendance(student.id, customDate.id)}
                                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                                    isPresent 
                                      ? 'bg-green-500 border-green-500 text-white' 
                                      : 'bg-red-500 border-red-500 text-white'
                                  }`}
                                >
                                  {isPresent ? 'P' : 'F'}
                                </button>
                              </td>
                            );
                          })}
                          <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                            <div className="text-sm">
                              <div className="text-green-600 dark:text-green-400 font-medium">
                                {stats.presentDays}P
                              </div>
                              <div className="text-red-600 dark:text-red-400 font-medium">
                                {stats.absentDays}F
                              </div>
                            </div>
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                            <button
                              onClick={() => deleteStudent(student.id)}
                              className="text-red-500 hover:text-red-700 p-1"
                              title="Excluir aluno"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              /* Summary View */
              <div className="space-y-4">
                {classData.students.map((student) => {
                  const stats = getStudentStats(student);
                  return (
                    <div key={student.id} className="border rounded-lg p-4 dark:border-gray-600">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                              {student.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {student.name}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {student.email} • {student.phone}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                              {stats.presentDays}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Presenças</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                              {stats.absentDays}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Faltas</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                              {stats.attendanceRate.toFixed(0)}%
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Frequência</div>
                          </div>
                          <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${stats.attendanceRate}%` }}
                            />
                          </div>
                          <button
                            onClick={() => deleteStudent(student.id)}
                            className="text-red-500 hover:text-red-700 p-2"
                            title="Excluir aluno"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Ações Rápidas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
                <UserCheck size={20} />
                <span className="text-xs">Marcar Todos Presentes</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
                <UserX size={20} />
                <span className="text-xs">Marcar Todos Ausentes</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
                <Edit size={20} />
                <span className="text-xs">Editar Turma</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
                <Calendar size={20} />
                <span className="text-xs">Ver Histórico</span>
              </Button>
            </div>
          </div>
        </div>
      </PageLayout>

      <AddStudentModal
        isOpen={isAddStudentModalOpen}
        onOpenChange={() => setIsAddStudentModalOpen(false)}
        onSave={addStudent}
      />
    </>
  );
};

export default ClassDiary;
