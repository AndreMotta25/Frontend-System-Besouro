
"use client";

import { useState } from "react";
import PageLayout from "@/app/pageLayout";
import { Button } from "@/components/UI/button";
import { Plus, UserCheck, UserX, Edit, Calendar, Eye } from "lucide-react";
import AddStudentModal from "@/components/Modals/AddStudentModal";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  attendance: Record<string, boolean>; // date -> isPresent
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
}

const ClassDiary = ({ params }: { params: { projectId: string; classId: string } }) => {
  const { projectId, classId } = params;
  
  // Generate 5 consecutive weekdays starting from today
  const generateWeekdays = () => {
    const days = [];
    const today = new Date();
    let currentDay = new Date(today);
    
    // Find the start of the current week (Monday)
    const dayOfWeek = currentDay.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    currentDay.setDate(currentDay.getDate() + mondayOffset);
    
    // Generate 5 weekdays
    for (let i = 0; i < 5; i++) {
      days.push(new Date(currentDay));
      currentDay.setDate(currentDay.getDate() + 1);
    }
    return days;
  };

  const weekdays = generateWeekdays();
  const [viewMode, setViewMode] = useState<'sheet' | 'summary'>('sheet');
  
  // Mock data with attendance for each day
  const [classData, setClassData] = useState<ClassData>({
    classId: "T848",
    address: "Rua Augusta, 123 - São Paulo, SP",
    startDate: { beginDate: "01/10", endDate: "07/10" },
    time: { beginAt: "08:00", finishAt: "12:00" },
    presenceList: "ZL",
    status: "confirmado",
    teacher: "Prof. Maria Silva",
    students: [
      { 
        id: "1", 
        name: "João Silva", 
        email: "joao@email.com", 
        phone: "(11) 99999-9999", 
        attendance: {
          [weekdays[0].toISOString().split('T')[0]]: true,
          [weekdays[1].toISOString().split('T')[0]]: true,
          [weekdays[2].toISOString().split('T')[0]]: false,
          [weekdays[3].toISOString().split('T')[0]]: true,
          [weekdays[4].toISOString().split('T')[0]]: true,
        }
      },
      { 
        id: "2", 
        name: "Maria Santos", 
        email: "maria@email.com", 
        phone: "(11) 88888-8888", 
        attendance: {
          [weekdays[0].toISOString().split('T')[0]]: false,
          [weekdays[1].toISOString().split('T')[0]]: true,
          [weekdays[2].toISOString().split('T')[0]]: true,
          [weekdays[3].toISOString().split('T')[0]]: false,
          [weekdays[4].toISOString().split('T')[0]]: true,
        }
      },
      { 
        id: "3", 
        name: "Pedro Costa", 
        email: "pedro@email.com", 
        phone: "(11) 77777-7777", 
        attendance: {
          [weekdays[0].toISOString().split('T')[0]]: true,
          [weekdays[1].toISOString().split('T')[0]]: true,
          [weekdays[2].toISOString().split('T')[0]]: true,
          [weekdays[3].toISOString().split('T')[0]]: true,
          [weekdays[4].toISOString().split('T')[0]]: false,
        }
      },
      { 
        id: "4", 
        name: "Ana Oliveira", 
        email: "ana@email.com", 
        phone: "(11) 66666-6666", 
        attendance: {
          [weekdays[0].toISOString().split('T')[0]]: true,
          [weekdays[1].toISOString().split('T')[0]]: false,
          [weekdays[2].toISOString().split('T')[0]]: false,
          [weekdays[3].toISOString().split('T')[0]]: true,
          [weekdays[4].toISOString().split('T')[0]]: true,
        }
      },
    ]
  });

  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);

  const toggleAttendance = (studentId: string, date: string) => {
    setClassData(prev => ({
      ...prev,
      students: prev.students.map(student =>
        student.id === studentId
          ? { 
              ...student, 
              attendance: {
                ...student.attendance,
                [date]: !student.attendance[date]
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
      attendance: weekdays.reduce((acc, day) => ({
        ...acc,
        [day.toISOString().split('T')[0]]: false
      }), {})
    };
    
    setClassData(prev => ({
      ...prev,
      students: [...prev.students, newStudent]
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

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', { 
      weekday: 'short', 
      day: '2-digit', 
      month: '2-digit' 
    });
  };

  const getDayName = (date: Date) => {
    return date.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '');
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
                      {weekdays.map((day, index) => (
                        <th key={index} className="border border-gray-300 dark:border-gray-600 p-3 text-center font-medium text-gray-900 dark:text-white min-w-[100px]">
                          <div className="flex flex-col">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {getDayName(day)}
                            </span>
                            <span className="text-sm">
                              {day.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}
                            </span>
                          </div>
                        </th>
                      ))}
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-center font-medium text-gray-900 dark:text-white">
                        Total
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
                          {weekdays.map((day, index) => {
                            const dateStr = day.toISOString().split('T')[0];
                            const isPresent = student.attendance[dateStr];
                            return (
                              <td key={index} className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                                <button
                                  onClick={() => toggleAttendance(student.id, dateStr)}
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
