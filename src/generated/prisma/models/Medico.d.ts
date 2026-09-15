import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MedicoModel = runtime.Types.Result.DefaultSelection<Prisma.$MedicoPayload>;
export type AggregateMedico = {
    _count: MedicoCountAggregateOutputType | null;
    _avg: MedicoAvgAggregateOutputType | null;
    _sum: MedicoSumAggregateOutputType | null;
    _min: MedicoMinAggregateOutputType | null;
    _max: MedicoMaxAggregateOutputType | null;
};
export type MedicoAvgAggregateOutputType = {
    id: number | null;
    especialidad_id: number | null;
};
export type MedicoSumAggregateOutputType = {
    id: number | null;
    especialidad_id: number | null;
};
export type MedicoMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    ap_paterno: string | null;
    ap_materno: string | null;
    email: string | null;
    telefono: string | null;
    especialidad_id: number | null;
};
export type MedicoMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    ap_paterno: string | null;
    ap_materno: string | null;
    email: string | null;
    telefono: string | null;
    especialidad_id: number | null;
};
export type MedicoCountAggregateOutputType = {
    id: number;
    nombre: number;
    ap_paterno: number;
    ap_materno: number;
    email: number;
    telefono: number;
    especialidad_id: number;
    _all: number;
};
export type MedicoAvgAggregateInputType = {
    id?: true;
    especialidad_id?: true;
};
export type MedicoSumAggregateInputType = {
    id?: true;
    especialidad_id?: true;
};
export type MedicoMinAggregateInputType = {
    id?: true;
    nombre?: true;
    ap_paterno?: true;
    ap_materno?: true;
    email?: true;
    telefono?: true;
    especialidad_id?: true;
};
export type MedicoMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    ap_paterno?: true;
    ap_materno?: true;
    email?: true;
    telefono?: true;
    especialidad_id?: true;
};
export type MedicoCountAggregateInputType = {
    id?: true;
    nombre?: true;
    ap_paterno?: true;
    ap_materno?: true;
    email?: true;
    telefono?: true;
    especialidad_id?: true;
    _all?: true;
};
export type MedicoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicoWhereInput;
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    cursor?: Prisma.MedicoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MedicoCountAggregateInputType;
    _avg?: MedicoAvgAggregateInputType;
    _sum?: MedicoSumAggregateInputType;
    _min?: MedicoMinAggregateInputType;
    _max?: MedicoMaxAggregateInputType;
};
export type GetMedicoAggregateType<T extends MedicoAggregateArgs> = {
    [P in keyof T & keyof AggregateMedico]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMedico[P]> : Prisma.GetScalarType<T[P], AggregateMedico[P]>;
};
export type MedicoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicoWhereInput;
    orderBy?: Prisma.MedicoOrderByWithAggregationInput | Prisma.MedicoOrderByWithAggregationInput[];
    by: Prisma.MedicoScalarFieldEnum[] | Prisma.MedicoScalarFieldEnum;
    having?: Prisma.MedicoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MedicoCountAggregateInputType | true;
    _avg?: MedicoAvgAggregateInputType;
    _sum?: MedicoSumAggregateInputType;
    _min?: MedicoMinAggregateInputType;
    _max?: MedicoMaxAggregateInputType;
};
export type MedicoGroupByOutputType = {
    id: number;
    nombre: string;
    ap_paterno: string;
    ap_materno: string | null;
    email: string | null;
    telefono: string | null;
    especialidad_id: number;
    _count: MedicoCountAggregateOutputType | null;
    _avg: MedicoAvgAggregateOutputType | null;
    _sum: MedicoSumAggregateOutputType | null;
    _min: MedicoMinAggregateOutputType | null;
    _max: MedicoMaxAggregateOutputType | null;
};
export type GetMedicoGroupByPayload<T extends MedicoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MedicoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MedicoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MedicoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MedicoGroupByOutputType[P]>;
}>>;
export type MedicoWhereInput = {
    AND?: Prisma.MedicoWhereInput | Prisma.MedicoWhereInput[];
    OR?: Prisma.MedicoWhereInput[];
    NOT?: Prisma.MedicoWhereInput | Prisma.MedicoWhereInput[];
    id?: Prisma.IntFilter<"Medico"> | number;
    nombre?: Prisma.StringFilter<"Medico"> | string;
    ap_paterno?: Prisma.StringFilter<"Medico"> | string;
    ap_materno?: Prisma.StringNullableFilter<"Medico"> | string | null;
    email?: Prisma.StringNullableFilter<"Medico"> | string | null;
    telefono?: Prisma.StringNullableFilter<"Medico"> | string | null;
    especialidad_id?: Prisma.IntFilter<"Medico"> | number;
    especialidad?: Prisma.XOR<Prisma.EspecialidadScalarRelationFilter, Prisma.EspecialidadWhereInput>;
    citas?: Prisma.CitaListRelationFilter;
};
export type MedicoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    ap_paterno?: Prisma.SortOrder;
    ap_materno?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    especialidad_id?: Prisma.SortOrder;
    especialidad?: Prisma.EspecialidadOrderByWithRelationInput;
    citas?: Prisma.CitaOrderByRelationAggregateInput;
};
export type MedicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.MedicoWhereInput | Prisma.MedicoWhereInput[];
    OR?: Prisma.MedicoWhereInput[];
    NOT?: Prisma.MedicoWhereInput | Prisma.MedicoWhereInput[];
    nombre?: Prisma.StringFilter<"Medico"> | string;
    ap_paterno?: Prisma.StringFilter<"Medico"> | string;
    ap_materno?: Prisma.StringNullableFilter<"Medico"> | string | null;
    telefono?: Prisma.StringNullableFilter<"Medico"> | string | null;
    especialidad_id?: Prisma.IntFilter<"Medico"> | number;
    especialidad?: Prisma.XOR<Prisma.EspecialidadScalarRelationFilter, Prisma.EspecialidadWhereInput>;
    citas?: Prisma.CitaListRelationFilter;
}, "id" | "email">;
export type MedicoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    ap_paterno?: Prisma.SortOrder;
    ap_materno?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    especialidad_id?: Prisma.SortOrder;
    _count?: Prisma.MedicoCountOrderByAggregateInput;
    _avg?: Prisma.MedicoAvgOrderByAggregateInput;
    _max?: Prisma.MedicoMaxOrderByAggregateInput;
    _min?: Prisma.MedicoMinOrderByAggregateInput;
    _sum?: Prisma.MedicoSumOrderByAggregateInput;
};
export type MedicoScalarWhereWithAggregatesInput = {
    AND?: Prisma.MedicoScalarWhereWithAggregatesInput | Prisma.MedicoScalarWhereWithAggregatesInput[];
    OR?: Prisma.MedicoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MedicoScalarWhereWithAggregatesInput | Prisma.MedicoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Medico"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Medico"> | string;
    ap_paterno?: Prisma.StringWithAggregatesFilter<"Medico"> | string;
    ap_materno?: Prisma.StringNullableWithAggregatesFilter<"Medico"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Medico"> | string | null;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"Medico"> | string | null;
    especialidad_id?: Prisma.IntWithAggregatesFilter<"Medico"> | number;
};
export type MedicoCreateInput = {
    nombre: string;
    ap_paterno: string;
    ap_materno?: string | null;
    email?: string | null;
    telefono?: string | null;
    especialidad: Prisma.EspecialidadCreateNestedOneWithoutMedicosInput;
    citas?: Prisma.CitaCreateNestedManyWithoutMedicoInput;
};
export type MedicoUncheckedCreateInput = {
    id?: number;
    nombre: string;
    ap_paterno: string;
    ap_materno?: string | null;
    email?: string | null;
    telefono?: string | null;
    especialidad_id: number;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutMedicoInput;
};
export type MedicoUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_paterno?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_materno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidad?: Prisma.EspecialidadUpdateOneRequiredWithoutMedicosNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_paterno?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_materno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidad_id?: Prisma.IntFieldUpdateOperationsInput | number;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutMedicoNestedInput;
};
export type MedicoCreateManyInput = {
    id?: number;
    nombre: string;
    ap_paterno: string;
    ap_materno?: string | null;
    email?: string | null;
    telefono?: string | null;
    especialidad_id: number;
};
export type MedicoUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_paterno?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_materno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MedicoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_paterno?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_materno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidad_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MedicoListRelationFilter = {
    every?: Prisma.MedicoWhereInput;
    some?: Prisma.MedicoWhereInput;
    none?: Prisma.MedicoWhereInput;
};
export type MedicoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MedicoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    ap_paterno?: Prisma.SortOrder;
    ap_materno?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    especialidad_id?: Prisma.SortOrder;
};
export type MedicoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    especialidad_id?: Prisma.SortOrder;
};
export type MedicoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    ap_paterno?: Prisma.SortOrder;
    ap_materno?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    especialidad_id?: Prisma.SortOrder;
};
export type MedicoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    ap_paterno?: Prisma.SortOrder;
    ap_materno?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    especialidad_id?: Prisma.SortOrder;
};
export type MedicoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    especialidad_id?: Prisma.SortOrder;
};
export type MedicoScalarRelationFilter = {
    is?: Prisma.MedicoWhereInput;
    isNot?: Prisma.MedicoWhereInput;
};
export type MedicoCreateNestedManyWithoutEspecialidadInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutEspecialidadInput, Prisma.MedicoUncheckedCreateWithoutEspecialidadInput> | Prisma.MedicoCreateWithoutEspecialidadInput[] | Prisma.MedicoUncheckedCreateWithoutEspecialidadInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutEspecialidadInput | Prisma.MedicoCreateOrConnectWithoutEspecialidadInput[];
    createMany?: Prisma.MedicoCreateManyEspecialidadInputEnvelope;
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
};
export type MedicoUncheckedCreateNestedManyWithoutEspecialidadInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutEspecialidadInput, Prisma.MedicoUncheckedCreateWithoutEspecialidadInput> | Prisma.MedicoCreateWithoutEspecialidadInput[] | Prisma.MedicoUncheckedCreateWithoutEspecialidadInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutEspecialidadInput | Prisma.MedicoCreateOrConnectWithoutEspecialidadInput[];
    createMany?: Prisma.MedicoCreateManyEspecialidadInputEnvelope;
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
};
export type MedicoUpdateManyWithoutEspecialidadNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutEspecialidadInput, Prisma.MedicoUncheckedCreateWithoutEspecialidadInput> | Prisma.MedicoCreateWithoutEspecialidadInput[] | Prisma.MedicoUncheckedCreateWithoutEspecialidadInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutEspecialidadInput | Prisma.MedicoCreateOrConnectWithoutEspecialidadInput[];
    upsert?: Prisma.MedicoUpsertWithWhereUniqueWithoutEspecialidadInput | Prisma.MedicoUpsertWithWhereUniqueWithoutEspecialidadInput[];
    createMany?: Prisma.MedicoCreateManyEspecialidadInputEnvelope;
    set?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    disconnect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    delete?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    update?: Prisma.MedicoUpdateWithWhereUniqueWithoutEspecialidadInput | Prisma.MedicoUpdateWithWhereUniqueWithoutEspecialidadInput[];
    updateMany?: Prisma.MedicoUpdateManyWithWhereWithoutEspecialidadInput | Prisma.MedicoUpdateManyWithWhereWithoutEspecialidadInput[];
    deleteMany?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
};
export type MedicoUncheckedUpdateManyWithoutEspecialidadNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutEspecialidadInput, Prisma.MedicoUncheckedCreateWithoutEspecialidadInput> | Prisma.MedicoCreateWithoutEspecialidadInput[] | Prisma.MedicoUncheckedCreateWithoutEspecialidadInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutEspecialidadInput | Prisma.MedicoCreateOrConnectWithoutEspecialidadInput[];
    upsert?: Prisma.MedicoUpsertWithWhereUniqueWithoutEspecialidadInput | Prisma.MedicoUpsertWithWhereUniqueWithoutEspecialidadInput[];
    createMany?: Prisma.MedicoCreateManyEspecialidadInputEnvelope;
    set?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    disconnect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    delete?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    update?: Prisma.MedicoUpdateWithWhereUniqueWithoutEspecialidadInput | Prisma.MedicoUpdateWithWhereUniqueWithoutEspecialidadInput[];
    updateMany?: Prisma.MedicoUpdateManyWithWhereWithoutEspecialidadInput | Prisma.MedicoUpdateManyWithWhereWithoutEspecialidadInput[];
    deleteMany?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
};
export type MedicoCreateNestedOneWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutCitasInput, Prisma.MedicoUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutCitasInput;
    connect?: Prisma.MedicoWhereUniqueInput;
};
export type MedicoUpdateOneRequiredWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutCitasInput, Prisma.MedicoUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutCitasInput;
    upsert?: Prisma.MedicoUpsertWithoutCitasInput;
    connect?: Prisma.MedicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicoUpdateToOneWithWhereWithoutCitasInput, Prisma.MedicoUpdateWithoutCitasInput>, Prisma.MedicoUncheckedUpdateWithoutCitasInput>;
};
export type MedicoCreateWithoutEspecialidadInput = {
    nombre: string;
    ap_paterno: string;
    ap_materno?: string | null;
    email?: string | null;
    telefono?: string | null;
    citas?: Prisma.CitaCreateNestedManyWithoutMedicoInput;
};
export type MedicoUncheckedCreateWithoutEspecialidadInput = {
    id?: number;
    nombre: string;
    ap_paterno: string;
    ap_materno?: string | null;
    email?: string | null;
    telefono?: string | null;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutMedicoInput;
};
export type MedicoCreateOrConnectWithoutEspecialidadInput = {
    where: Prisma.MedicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutEspecialidadInput, Prisma.MedicoUncheckedCreateWithoutEspecialidadInput>;
};
export type MedicoCreateManyEspecialidadInputEnvelope = {
    data: Prisma.MedicoCreateManyEspecialidadInput | Prisma.MedicoCreateManyEspecialidadInput[];
    skipDuplicates?: boolean;
};
export type MedicoUpsertWithWhereUniqueWithoutEspecialidadInput = {
    where: Prisma.MedicoWhereUniqueInput;
    update: Prisma.XOR<Prisma.MedicoUpdateWithoutEspecialidadInput, Prisma.MedicoUncheckedUpdateWithoutEspecialidadInput>;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutEspecialidadInput, Prisma.MedicoUncheckedCreateWithoutEspecialidadInput>;
};
export type MedicoUpdateWithWhereUniqueWithoutEspecialidadInput = {
    where: Prisma.MedicoWhereUniqueInput;
    data: Prisma.XOR<Prisma.MedicoUpdateWithoutEspecialidadInput, Prisma.MedicoUncheckedUpdateWithoutEspecialidadInput>;
};
export type MedicoUpdateManyWithWhereWithoutEspecialidadInput = {
    where: Prisma.MedicoScalarWhereInput;
    data: Prisma.XOR<Prisma.MedicoUpdateManyMutationInput, Prisma.MedicoUncheckedUpdateManyWithoutEspecialidadInput>;
};
export type MedicoScalarWhereInput = {
    AND?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
    OR?: Prisma.MedicoScalarWhereInput[];
    NOT?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
    id?: Prisma.IntFilter<"Medico"> | number;
    nombre?: Prisma.StringFilter<"Medico"> | string;
    ap_paterno?: Prisma.StringFilter<"Medico"> | string;
    ap_materno?: Prisma.StringNullableFilter<"Medico"> | string | null;
    email?: Prisma.StringNullableFilter<"Medico"> | string | null;
    telefono?: Prisma.StringNullableFilter<"Medico"> | string | null;
    especialidad_id?: Prisma.IntFilter<"Medico"> | number;
};
export type MedicoCreateWithoutCitasInput = {
    nombre: string;
    ap_paterno: string;
    ap_materno?: string | null;
    email?: string | null;
    telefono?: string | null;
    especialidad: Prisma.EspecialidadCreateNestedOneWithoutMedicosInput;
};
export type MedicoUncheckedCreateWithoutCitasInput = {
    id?: number;
    nombre: string;
    ap_paterno: string;
    ap_materno?: string | null;
    email?: string | null;
    telefono?: string | null;
    especialidad_id: number;
};
export type MedicoCreateOrConnectWithoutCitasInput = {
    where: Prisma.MedicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutCitasInput, Prisma.MedicoUncheckedCreateWithoutCitasInput>;
};
export type MedicoUpsertWithoutCitasInput = {
    update: Prisma.XOR<Prisma.MedicoUpdateWithoutCitasInput, Prisma.MedicoUncheckedUpdateWithoutCitasInput>;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutCitasInput, Prisma.MedicoUncheckedCreateWithoutCitasInput>;
    where?: Prisma.MedicoWhereInput;
};
export type MedicoUpdateToOneWithWhereWithoutCitasInput = {
    where?: Prisma.MedicoWhereInput;
    data: Prisma.XOR<Prisma.MedicoUpdateWithoutCitasInput, Prisma.MedicoUncheckedUpdateWithoutCitasInput>;
};
export type MedicoUpdateWithoutCitasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_paterno?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_materno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidad?: Prisma.EspecialidadUpdateOneRequiredWithoutMedicosNestedInput;
};
export type MedicoUncheckedUpdateWithoutCitasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_paterno?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_materno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidad_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MedicoCreateManyEspecialidadInput = {
    id?: number;
    nombre: string;
    ap_paterno: string;
    ap_materno?: string | null;
    email?: string | null;
    telefono?: string | null;
};
export type MedicoUpdateWithoutEspecialidadInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_paterno?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_materno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    citas?: Prisma.CitaUpdateManyWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateWithoutEspecialidadInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_paterno?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_materno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateManyWithoutEspecialidadInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_paterno?: Prisma.StringFieldUpdateOperationsInput | string;
    ap_materno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MedicoCountOutputType = {
    citas: number;
};
export type MedicoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | MedicoCountOutputTypeCountCitasArgs;
};
export type MedicoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoCountOutputTypeSelect<ExtArgs> | null;
};
export type MedicoCountOutputTypeCountCitasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CitaWhereInput;
};
export type MedicoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    ap_paterno?: boolean;
    ap_materno?: boolean;
    email?: boolean;
    telefono?: boolean;
    especialidad_id?: boolean;
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
    citas?: boolean | Prisma.Medico$citasArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medico"]>;
export type MedicoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    ap_paterno?: boolean;
    ap_materno?: boolean;
    email?: boolean;
    telefono?: boolean;
    especialidad_id?: boolean;
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medico"]>;
export type MedicoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    ap_paterno?: boolean;
    ap_materno?: boolean;
    email?: boolean;
    telefono?: boolean;
    especialidad_id?: boolean;
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medico"]>;
export type MedicoSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    ap_paterno?: boolean;
    ap_materno?: boolean;
    email?: boolean;
    telefono?: boolean;
    especialidad_id?: boolean;
};
export type MedicoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "ap_paterno" | "ap_materno" | "email" | "telefono" | "especialidad_id", ExtArgs["result"]["medico"]>;
export type MedicoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
    citas?: boolean | Prisma.Medico$citasArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MedicoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
};
export type MedicoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
};
export type $MedicoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Medico";
    objects: {
        especialidad: Prisma.$EspecialidadPayload<ExtArgs>;
        citas: Prisma.$CitaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        ap_paterno: string;
        ap_materno: string | null;
        email: string | null;
        telefono: string | null;
        especialidad_id: number;
    }, ExtArgs["result"]["medico"]>;
    composites: {};
};
export type MedicoGetPayload<S extends boolean | null | undefined | MedicoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MedicoPayload, S>;
export type MedicoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MedicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MedicoCountAggregateInputType | true;
};
export interface MedicoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Medico'];
        meta: {
            name: 'Medico';
        };
    };
    findUnique<T extends MedicoFindUniqueArgs>(args: Prisma.SelectSubset<T, MedicoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MedicoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MedicoFindFirstArgs>(args?: Prisma.SelectSubset<T, MedicoFindFirstArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MedicoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MedicoFindManyArgs>(args?: Prisma.SelectSubset<T, MedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MedicoCreateArgs>(args: Prisma.SelectSubset<T, MedicoCreateArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MedicoCreateManyArgs>(args?: Prisma.SelectSubset<T, MedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MedicoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MedicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MedicoDeleteArgs>(args: Prisma.SelectSubset<T, MedicoDeleteArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MedicoUpdateArgs>(args: Prisma.SelectSubset<T, MedicoUpdateArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MedicoDeleteManyArgs>(args?: Prisma.SelectSubset<T, MedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MedicoUpdateManyArgs>(args: Prisma.SelectSubset<T, MedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MedicoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MedicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MedicoUpsertArgs>(args: Prisma.SelectSubset<T, MedicoUpsertArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MedicoCountArgs>(args?: Prisma.Subset<T, MedicoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MedicoCountAggregateOutputType> : number>;
    aggregate<T extends MedicoAggregateArgs>(args: Prisma.Subset<T, MedicoAggregateArgs>): Prisma.PrismaPromise<GetMedicoAggregateType<T>>;
    groupBy<T extends MedicoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MedicoGroupByArgs['orderBy'];
    } : {
        orderBy?: MedicoGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MedicoFieldRefs;
}
export interface Prisma__MedicoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    especialidad<T extends Prisma.EspecialidadDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EspecialidadDefaultArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    citas<T extends Prisma.Medico$citasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Medico$citasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MedicoFieldRefs {
    readonly id: Prisma.FieldRef<"Medico", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Medico", 'String'>;
    readonly ap_paterno: Prisma.FieldRef<"Medico", 'String'>;
    readonly ap_materno: Prisma.FieldRef<"Medico", 'String'>;
    readonly email: Prisma.FieldRef<"Medico", 'String'>;
    readonly telefono: Prisma.FieldRef<"Medico", 'String'>;
    readonly especialidad_id: Prisma.FieldRef<"Medico", 'Int'>;
}
export type MedicoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where: Prisma.MedicoWhereUniqueInput;
};
export type MedicoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where: Prisma.MedicoWhereUniqueInput;
};
export type MedicoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where?: Prisma.MedicoWhereInput;
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    cursor?: Prisma.MedicoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicoScalarFieldEnum | Prisma.MedicoScalarFieldEnum[];
};
export type MedicoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where?: Prisma.MedicoWhereInput;
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    cursor?: Prisma.MedicoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicoScalarFieldEnum | Prisma.MedicoScalarFieldEnum[];
};
export type MedicoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where?: Prisma.MedicoWhereInput;
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    cursor?: Prisma.MedicoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicoScalarFieldEnum | Prisma.MedicoScalarFieldEnum[];
};
export type MedicoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicoCreateInput, Prisma.MedicoUncheckedCreateInput>;
};
export type MedicoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MedicoCreateManyInput | Prisma.MedicoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MedicoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    data: Prisma.MedicoCreateManyInput | Prisma.MedicoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MedicoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MedicoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicoUpdateInput, Prisma.MedicoUncheckedUpdateInput>;
    where: Prisma.MedicoWhereUniqueInput;
};
export type MedicoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MedicoUpdateManyMutationInput, Prisma.MedicoUncheckedUpdateManyInput>;
    where?: Prisma.MedicoWhereInput;
    limit?: number;
};
export type MedicoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicoUpdateManyMutationInput, Prisma.MedicoUncheckedUpdateManyInput>;
    where?: Prisma.MedicoWhereInput;
    limit?: number;
    include?: Prisma.MedicoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MedicoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where: Prisma.MedicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicoCreateInput, Prisma.MedicoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MedicoUpdateInput, Prisma.MedicoUncheckedUpdateInput>;
};
export type MedicoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where: Prisma.MedicoWhereUniqueInput;
};
export type MedicoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicoWhereInput;
    limit?: number;
};
export type Medico$citasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitaSelect<ExtArgs> | null;
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    include?: Prisma.CitaInclude<ExtArgs> | null;
    where?: Prisma.CitaWhereInput;
    orderBy?: Prisma.CitaOrderByWithRelationInput | Prisma.CitaOrderByWithRelationInput[];
    cursor?: Prisma.CitaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CitaScalarFieldEnum | Prisma.CitaScalarFieldEnum[];
};
export type MedicoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
};
