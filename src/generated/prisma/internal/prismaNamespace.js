import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    Paciente: 'Paciente',
    HistorialClinico: 'HistorialClinico',
    Especialidad: 'Especialidad',
    Medico: 'Medico',
    Cita: 'Cita'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role'
};
export const PacienteScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    ap_paterno: 'ap_paterno',
    ap_materno: 'ap_materno',
    email: 'email',
    telefono: 'telefono',
    fecha_nacimiento: 'fecha_nacimiento'
};
export const HistorialClinicoScalarFieldEnum = {
    id: 'id',
    peso: 'peso',
    altura: 'altura',
    diagnostico: 'diagnostico',
    tratamiento: 'tratamiento',
    id_cita: 'id_cita'
};
export const EspecialidadScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre'
};
export const MedicoScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    ap_paterno: 'ap_paterno',
    ap_materno: 'ap_materno',
    email: 'email',
    telefono: 'telefono',
    especialidad_id: 'especialidad_id'
};
export const CitaScalarFieldEnum = {
    id: 'id',
    fecha: 'fecha',
    hora: 'hora',
    estado: 'estado',
    id_paciente: 'id_paciente',
    id_medico: 'id_medico'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map