export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  youtubeUrl: string;
  tags: string[];
}

export const categories = [
  "Primeros Pasos",
  "Gestión de Pacientes",
  "Agenda y Citas",
  "Facturación",
  "Reportes",
  "Configuración",
];

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "¿Cómo crear mi cuenta por primera vez?",
    answer: "Aprende a registrarte y configurar tu cuenta inicial en el sistema médico paso a paso.",
    category: "Primeros Pasos",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["registro", "cuenta", "inicio", "configurar"],
  },
  {
    id: "2",
    question: "¿Cómo registrar un nuevo paciente?",
    answer: "Guía completa para agregar pacientes al sistema con toda su información clínica y personal.",
    category: "Gestión de Pacientes",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["paciente", "registro", "nuevo", "agregar"],
  },
  {
    id: "3",
    question: "¿Cómo agendar una cita médica?",
    answer: "Descubre cómo programar citas, establecer horarios y gestionar la disponibilidad de los doctores.",
    category: "Agenda y Citas",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["cita", "agenda", "horario", "programar"],
  },
  {
    id: "4",
    question: "¿Cómo generar una factura?",
    answer: "Tutorial para crear facturas electrónicas y gestionar los cobros a pacientes.",
    category: "Facturación",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["factura", "cobro", "pago", "electrónica"],
  },
  {
    id: "5",
    question: "¿Cómo ver el historial clínico de un paciente?",
    answer: "Accede al expediente completo con diagnósticos, tratamientos y notas médicas anteriores.",
    category: "Gestión de Pacientes",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["historial", "expediente", "clínico", "diagnóstico"],
  },
  {
    id: "6",
    question: "¿Cómo exportar reportes mensuales?",
    answer: "Genera y descarga reportes de actividad, ingresos y estadísticas de tu consultorio.",
    category: "Reportes",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["reporte", "exportar", "estadísticas", "mensual"],
  },
  {
    id: "7",
    question: "¿Cómo personalizar los horarios de atención?",
    answer: "Configura los días y horarios de trabajo para cada profesional de salud en el sistema.",
    category: "Configuración",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["horario", "configurar", "atención", "personalizar"],
  },
  {
    id: "8",
    question: "¿Cómo enviar recordatorios de citas a los pacientes?",
    answer: "Activa y configura las notificaciones automáticas por correo o SMS para tus pacientes.",
    category: "Agenda y Citas",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["recordatorio", "notificación", "SMS", "correo", "cita"],
  },
  {
    id: "9",
    question: "¿Cómo agregar usuarios y asignar roles?",
    answer: "Administra el acceso de tu equipo creando usuarios con permisos específicos.",
    category: "Configuración",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["usuario", "rol", "permiso", "equipo", "acceso"],
  },
  {
    id: "10",
    question: "¿Cómo registrar recetas médicas?",
    answer: "Crea y administra recetas electrónicas vinculadas al expediente del paciente.",
    category: "Gestión de Pacientes",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["receta", "medicamento", "prescripción", "electrónica"],
  },
];
