
"use client";

import { useState } from "react";
import PageLayout from "@/app/pageLayout";
import { Button } from "@/components/UI/button";
import { Plus, UserCheck, UserX, Edit, Calendar } from "lucide-react";
import AddStudentModal from "@/components/Modals/AddStudentModal";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  isPresent: boolean;
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
  
  // Mock data - replace with actual data fetching
  const [classData, setClassData] = useState<ClassData>({
    classId: "T848",
    address: "Rua Augusta, 123 - São Paulo, SP",
    startDate: { beginDate: "01/10", endDate: "07/10" },
    time: { beginAt: "08:00", finishAt: "12:00" },
    presenceList: "ZL",
    status: "confirmado",
    teacher: "Prof. Maria Silva",
    students: [
      { id: "1", name: "João Silva", email: "joao@email.com", phone: "(11) 99999-9999", isPresent: true },
      { id: "2", name: "Maria Santos", email: "maria@email.com", phone: "(11) 88888-8888", isPresent: false },
      { id: "3", name: "Pedro Costa", email: "pedro@email.com", phone: "(11) 77777-7777", isPresent: true },
      { id: "4", name: "Ana Oliveira", email: "ana@email.com", phone: "(11) 66666-6666", isPresent: false },
    ]
  });

  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const togglePresence = (studentId: string) => {
    setClassData(prev => ({
      ...prev,
      students: prev.students.map(student =>
        student.id === studentId
          ? { ...student, isPresent: !student.isPresent }
          : student
      )
    }));
  };

  const addStudent = (studentData: { name: string; email: string; phone: string }) => {
    const newStudent: Student = {
      id: Date.now().toString(),
      ...studentData,
      isPresent: false
    };
    
    setClassData(prev => ({
      ...prev,
      students: [...prev.students, newStudent]
    }));
  };

  const presentStudents = classData.students.filter(s => s.isPresent).length;
  const totalStudents = classData.students.length;

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

          {/* Attendance Controls */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Lista de Presença
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="border rounded px-2 py-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <Button
                  onClick={() => setIsAddStudentModalOpen(true)}
                  className="bg-orangeSupport hover:bg-orangeSupport/90 flex items-center gap-2"
                >
                  <Plus size={16} />
                  Adicionar Aluno
                </Button>
              </div>
            </div>

            {/* Attendance Summary */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {presentStudents}
                </div>
                <div className="text-sm text-green-600 dark:text-green-400">Presentes</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {totalStudents - presentStudents}
                </div>
                <div className="text-sm text-red-600 dark:text-red-400">Ausentes</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {totalStudents}
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400">Total</div>
              </div>
            </div>

            {/* Students List */}
            <div className="space-y-2">
              {classData.students.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between p-4 border rounded-lg dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
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
                  <div className="flex items-center gap-2">
                    <Button
                      variant={student.isPresent ? "default" : "outline"}
                      size="sm"
                      onClick={() => togglePresence(student.id)}
                      className={student.isPresent ? 
                        "bg-green-600 hover:bg-green-700" : 
                        "border-red-300 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                      }
                    >
                      {student.isPresent ? (
                        <>
                          <UserCheck size={16} className="mr-1" />
                          Presente
                        </>
                      ) : (
                        <>
                          <UserX size={16} className="mr-1" />
                          Ausente
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
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
