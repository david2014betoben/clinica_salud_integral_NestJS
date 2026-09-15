import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HistorialClinicoModel = runtime.Types.Result.DefaultSelection<Prisma.$HistorialClinicoPayload>;
export type AggregateHistorialClinico = {
    _count: HistorialClinicoCountAggregateOutputType | null;
    _avg: HistorialClinicoAvgAggregateOutputType | null;
    _sum: HistorialClinicoSumAggregateOutputType | null;
    _min: HistorialClinicoMinAggregateOutputType | null;
    _max: HistorialClinicoMaxAggregateOutputType | null;
};
export type HistorialClinicoAvgAggregateOutputType = {
    id: number | null;
    peso: runtime.Decimal | null;
    altura: runtime.Decimal | null;
    id_cita: number | null;
};
export type HistorialClinicoSumAggregateOutputType = {
    id: number | null;
    peso: runtime.Decimal | null;
    altura: runtime.Decimal | null;
    id_cita: number | null;
};
export type HistorialClinicoMinAggregateOutputType = {
    id: number | null;
    peso: runtime.Decimal | null;
    altura: runtime.Decimal | null;
    diagnostico: string | null;
    tratamiento: string | null;
    id_cita: number | null;
};
export type HistorialClinicoMaxAggregateOutputType = {
    id: number | null;
    peso: runtime.Decimal | null;
    altura: runtime.Decimal | null;
    diagnostico: string | null;
    tratamiento: string | null;
    id_cita: number | null;
};
export type HistorialClinicoCountAggregateOutputType = {
    id: number;
    peso: number;
    altura: number;
    diagnostico: number;
    tratamiento: number;
    id_cita: number;
    _all: number;
};
export type HistorialClinicoAvgAggregateInputType = {
    id?: true;
    peso?: true;
    altura?: true;
    id_cita?: true;
};
export type HistorialClinicoSumAggregateInputType = {
    id?: true;
    peso?: true;
    altura?: true;
    id_cita?: true;
};
export type HistorialClinicoMinAggregateInputType = {
    id?: true;
    peso?: true;
    altura?: true;
    diagnostico?: true;
    tratamiento?: true;
    id_cita?: true;
};
export type HistorialClinicoMaxAggregateInputType = {
    id?: true;
    peso?: true;
    altura?: true;
    diagnostico?: true;
    tratamiento?: true;
    id_cita?: true;
};
export type HistorialClinicoCountAggregateInputType = {
    id?: true;
    peso?: true;
    altura?: true;
    diagnostico?: true;
    tratamiento?: true;
    id_cita?: true;
    _all?: true;
};
export type HistorialClinicoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HistorialClinicoWhereInput;
    orderBy?: Prisma.HistorialClinicoOrderByWithRelationInput | Prisma.HistorialClinicoOrderByWithRelationInput[];
    cursor?: Prisma.HistorialClinicoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HistorialClinicoCountAggregateInputType;
    _avg?: HistorialClinicoAvgAggregateInputType;
    _sum?: HistorialClinicoSumAggregateInputType;
    _min?: HistorialClinicoMinAggregateInputType;
    _max?: HistorialClinicoMaxAggregateInputType;
};
export type GetHistorialClinicoAggregateType<T extends HistorialClinicoAggregateArgs> = {
    [P in keyof T & keyof AggregateHistorialClinico]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHistorialClinico[P]> : Prisma.GetScalarType<T[P], AggregateHistorialClinico[P]>;
};
export type HistorialClinicoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HistorialClinicoWhereInput;
    orderBy?: Prisma.HistorialClinicoOrderByWithAggregationInput | Prisma.HistorialClinicoOrderByWithAggregationInput[];
    by: Prisma.HistorialClinicoScalarFieldEnum[] | Prisma.HistorialClinicoScalarFieldEnum;
    having?: Prisma.HistorialClinicoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HistorialClinicoCountAggregateInputType | true;
    _avg?: HistorialClinicoAvgAggregateInputType;
    _sum?: HistorialClinicoSumAggregateInputType;
    _min?: HistorialClinicoMinAggregateInputType;
    _max?: HistorialClinicoMaxAggregateInputType;
};
export type HistorialClinicoGroupByOutputType = {
    id: number;
    peso: runtime.Decimal;
    altura: runtime.Decimal;
    diagnostico: string;
    tratamiento: string;
    id_cita: number;
    _count: HistorialClinicoCountAggregateOutputType | null;
    _avg: HistorialClinicoAvgAggregateOutputType | null;
    _sum: HistorialClinicoSumAggregateOutputType | null;
    _min: HistorialClinicoMinAggregateOutputType | null;
    _max: HistorialClinicoMaxAggregateOutputType | null;
};
export type GetHistorialClinicoGroupByPayload<T extends HistorialClinicoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HistorialClinicoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HistorialClinicoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HistorialClinicoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HistorialClinicoGroupByOutputType[P]>;
}>>;
export type HistorialClinicoWhereInput = {
    AND?: Prisma.HistorialClinicoWhereInput | Prisma.HistorialClinicoWhereInput[];
    OR?: Prisma.HistorialClinicoWhereInput[];
    NOT?: Prisma.HistorialClinicoWhereInput | Prisma.HistorialClinicoWhereInput[];
    id?: Prisma.IntFilter<"HistorialClinico"> | number;
    peso?: Prisma.DecimalFilter<"HistorialClinico"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura?: Prisma.DecimalFilter<"HistorialClinico"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico?: Prisma.StringFilter<"HistorialClinico"> | string;
    tratamiento?: Prisma.StringFilter<"HistorialClinico"> | string;
    id_cita?: Prisma.IntFilter<"HistorialClinico"> | number;
    cita?: Prisma.XOR<Prisma.CitaScalarRelationFilter, Prisma.CitaWhereInput>;
};
export type HistorialClinicoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    altura?: Prisma.SortOrder;
    diagnostico?: Prisma.SortOrder;
    tratamiento?: Prisma.SortOrder;
    id_cita?: Prisma.SortOrder;
    cita?: Prisma.CitaOrderByWithRelationInput;
};
export type HistorialClinicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    id_cita?: number;
    AND?: Prisma.HistorialClinicoWhereInput | Prisma.HistorialClinicoWhereInput[];
    OR?: Prisma.HistorialClinicoWhereInput[];
    NOT?: Prisma.HistorialClinicoWhereInput | Prisma.HistorialClinicoWhereInput[];
    peso?: Prisma.DecimalFilter<"HistorialClinico"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura?: Prisma.DecimalFilter<"HistorialClinico"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico?: Prisma.StringFilter<"HistorialClinico"> | string;
    tratamiento?: Prisma.StringFilter<"HistorialClinico"> | string;
    cita?: Prisma.XOR<Prisma.CitaScalarRelationFilter, Prisma.CitaWhereInput>;
}, "id" | "id_cita">;
export type HistorialClinicoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    altura?: Prisma.SortOrder;
    diagnostico?: Prisma.SortOrder;
    tratamiento?: Prisma.SortOrder;
    id_cita?: Prisma.SortOrder;
    _count?: Prisma.HistorialClinicoCountOrderByAggregateInput;
    _avg?: Prisma.HistorialClinicoAvgOrderByAggregateInput;
    _max?: Prisma.HistorialClinicoMaxOrderByAggregateInput;
    _min?: Prisma.HistorialClinicoMinOrderByAggregateInput;
    _sum?: Prisma.HistorialClinicoSumOrderByAggregateInput;
};
export type HistorialClinicoScalarWhereWithAggregatesInput = {
    AND?: Prisma.HistorialClinicoScalarWhereWithAggregatesInput | Prisma.HistorialClinicoScalarWhereWithAggregatesInput[];
    OR?: Prisma.HistorialClinicoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HistorialClinicoScalarWhereWithAggregatesInput | Prisma.HistorialClinicoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"HistorialClinico"> | number;
    peso?: Prisma.DecimalWithAggregatesFilter<"HistorialClinico"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura?: Prisma.DecimalWithAggregatesFilter<"HistorialClinico"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico?: Prisma.StringWithAggregatesFilter<"HistorialClinico"> | string;
    tratamiento?: Prisma.StringWithAggregatesFilter<"HistorialClinico"> | string;
    id_cita?: Prisma.IntWithAggregatesFilter<"HistorialClinico"> | number;
};
export type HistorialClinicoCreateInput = {
    peso: runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura: runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico: string;
    tratamiento: string;
    cita: Prisma.CitaCreateNestedOneWithoutHistorialInput;
};
export type HistorialClinicoUncheckedCreateInput = {
    id?: number;
    peso: runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura: runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico: string;
    tratamiento: string;
    id_cita: number;
};
export type HistorialClinicoUpdateInput = {
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento?: Prisma.StringFieldUpdateOperationsInput | string;
    cita?: Prisma.CitaUpdateOneRequiredWithoutHistorialNestedInput;
};
export type HistorialClinicoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento?: Prisma.StringFieldUpdateOperationsInput | string;
    id_cita?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type HistorialClinicoCreateManyInput = {
    id?: number;
    peso: runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura: runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico: string;
    tratamiento: string;
    id_cita: number;
};
export type HistorialClinicoUpdateManyMutationInput = {
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type HistorialClinicoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento?: Prisma.StringFieldUpdateOperationsInput | string;
    id_cita?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type HistorialClinicoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    altura?: Prisma.SortOrder;
    diagnostico?: Prisma.SortOrder;
    tratamiento?: Prisma.SortOrder;
    id_cita?: Prisma.SortOrder;
};
export type HistorialClinicoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    altura?: Prisma.SortOrder;
    id_cita?: Prisma.SortOrder;
};
export type HistorialClinicoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    altura?: Prisma.SortOrder;
    diagnostico?: Prisma.SortOrder;
    tratamiento?: Prisma.SortOrder;
    id_cita?: Prisma.SortOrder;
};
export type HistorialClinicoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    altura?: Prisma.SortOrder;
    diagnostico?: Prisma.SortOrder;
    tratamiento?: Prisma.SortOrder;
    id_cita?: Prisma.SortOrder;
};
export type HistorialClinicoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    altura?: Prisma.SortOrder;
    id_cita?: Prisma.SortOrder;
};
export type HistorialClinicoNullableScalarRelationFilter = {
    is?: Prisma.HistorialClinicoWhereInput | null;
    isNot?: Prisma.HistorialClinicoWhereInput | null;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type HistorialClinicoCreateNestedOneWithoutCitaInput = {
    create?: Prisma.XOR<Prisma.HistorialClinicoCreateWithoutCitaInput, Prisma.HistorialClinicoUncheckedCreateWithoutCitaInput>;
    connectOrCreate?: Prisma.HistorialClinicoCreateOrConnectWithoutCitaInput;
    connect?: Prisma.HistorialClinicoWhereUniqueInput;
};
export type HistorialClinicoUncheckedCreateNestedOneWithoutCitaInput = {
    create?: Prisma.XOR<Prisma.HistorialClinicoCreateWithoutCitaInput, Prisma.HistorialClinicoUncheckedCreateWithoutCitaInput>;
    connectOrCreate?: Prisma.HistorialClinicoCreateOrConnectWithoutCitaInput;
    connect?: Prisma.HistorialClinicoWhereUniqueInput;
};
export type HistorialClinicoUpdateOneWithoutCitaNestedInput = {
    create?: Prisma.XOR<Prisma.HistorialClinicoCreateWithoutCitaInput, Prisma.HistorialClinicoUncheckedCreateWithoutCitaInput>;
    connectOrCreate?: Prisma.HistorialClinicoCreateOrConnectWithoutCitaInput;
    upsert?: Prisma.HistorialClinicoUpsertWithoutCitaInput;
    disconnect?: Prisma.HistorialClinicoWhereInput | boolean;
    delete?: Prisma.HistorialClinicoWhereInput | boolean;
    connect?: Prisma.HistorialClinicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HistorialClinicoUpdateToOneWithWhereWithoutCitaInput, Prisma.HistorialClinicoUpdateWithoutCitaInput>, Prisma.HistorialClinicoUncheckedUpdateWithoutCitaInput>;
};
export type HistorialClinicoUncheckedUpdateOneWithoutCitaNestedInput = {
    create?: Prisma.XOR<Prisma.HistorialClinicoCreateWithoutCitaInput, Prisma.HistorialClinicoUncheckedCreateWithoutCitaInput>;
    connectOrCreate?: Prisma.HistorialClinicoCreateOrConnectWithoutCitaInput;
    upsert?: Prisma.HistorialClinicoUpsertWithoutCitaInput;
    disconnect?: Prisma.HistorialClinicoWhereInput | boolean;
    delete?: Prisma.HistorialClinicoWhereInput | boolean;
    connect?: Prisma.HistorialClinicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HistorialClinicoUpdateToOneWithWhereWithoutCitaInput, Prisma.HistorialClinicoUpdateWithoutCitaInput>, Prisma.HistorialClinicoUncheckedUpdateWithoutCitaInput>;
};
export type HistorialClinicoCreateWithoutCitaInput = {
    peso: runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura: runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico: string;
    tratamiento: string;
};
export type HistorialClinicoUncheckedCreateWithoutCitaInput = {
    id?: number;
    peso: runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura: runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico: string;
    tratamiento: string;
};
export type HistorialClinicoCreateOrConnectWithoutCitaInput = {
    where: Prisma.HistorialClinicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.HistorialClinicoCreateWithoutCitaInput, Prisma.HistorialClinicoUncheckedCreateWithoutCitaInput>;
};
export type HistorialClinicoUpsertWithoutCitaInput = {
    update: Prisma.XOR<Prisma.HistorialClinicoUpdateWithoutCitaInput, Prisma.HistorialClinicoUncheckedUpdateWithoutCitaInput>;
    create: Prisma.XOR<Prisma.HistorialClinicoCreateWithoutCitaInput, Prisma.HistorialClinicoUncheckedCreateWithoutCitaInput>;
    where?: Prisma.HistorialClinicoWhereInput;
};
export type HistorialClinicoUpdateToOneWithWhereWithoutCitaInput = {
    where?: Prisma.HistorialClinicoWhereInput;
    data: Prisma.XOR<Prisma.HistorialClinicoUpdateWithoutCitaInput, Prisma.HistorialClinicoUncheckedUpdateWithoutCitaInput>;
};
export type HistorialClinicoUpdateWithoutCitaInput = {
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type HistorialClinicoUncheckedUpdateWithoutCitaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    altura?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type HistorialClinicoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    peso?: boolean;
    altura?: boolean;
    diagnostico?: boolean;
    tratamiento?: boolean;
    id_cita?: boolean;
    cita?: boolean | Prisma.CitaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["historialClinico"]>;
export type HistorialClinicoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    peso?: boolean;
    altura?: boolean;
    diagnostico?: boolean;
    tratamiento?: boolean;
    id_cita?: boolean;
    cita?: boolean | Prisma.CitaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["historialClinico"]>;
export type HistorialClinicoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    peso?: boolean;
    altura?: boolean;
    diagnostico?: boolean;
    tratamiento?: boolean;
    id_cita?: boolean;
    cita?: boolean | Prisma.CitaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["historialClinico"]>;
export type HistorialClinicoSelectScalar = {
    id?: boolean;
    peso?: boolean;
    altura?: boolean;
    diagnostico?: boolean;
    tratamiento?: boolean;
    id_cita?: boolean;
};
export type HistorialClinicoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "peso" | "altura" | "diagnostico" | "tratamiento" | "id_cita", ExtArgs["result"]["historialClinico"]>;
export type HistorialClinicoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cita?: boolean | Prisma.CitaDefaultArgs<ExtArgs>;
};
export type HistorialClinicoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cita?: boolean | Prisma.CitaDefaultArgs<ExtArgs>;
};
export type HistorialClinicoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cita?: boolean | Prisma.CitaDefaultArgs<ExtArgs>;
};
export type $HistorialClinicoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HistorialClinico";
    objects: {
        cita: Prisma.$CitaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        peso: runtime.Decimal;
        altura: runtime.Decimal;
        diagnostico: string;
        tratamiento: string;
        id_cita: number;
    }, ExtArgs["result"]["historialClinico"]>;
    composites: {};
};
export type HistorialClinicoGetPayload<S extends boolean | null | undefined | HistorialClinicoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HistorialClinicoPayload, S>;
export type HistorialClinicoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HistorialClinicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HistorialClinicoCountAggregateInputType | true;
};
export interface HistorialClinicoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HistorialClinico'];
        meta: {
            name: 'HistorialClinico';
        };
    };
    findUnique<T extends HistorialClinicoFindUniqueArgs>(args: Prisma.SelectSubset<T, HistorialClinicoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HistorialClinicoClient<runtime.Types.Result.GetResult<Prisma.$HistorialClinicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HistorialClinicoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HistorialClinicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HistorialClinicoClient<runtime.Types.Result.GetResult<Prisma.$HistorialClinicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HistorialClinicoFindFirstArgs>(args?: Prisma.SelectSubset<T, HistorialClinicoFindFirstArgs<ExtArgs>>): Prisma.Prisma__HistorialClinicoClient<runtime.Types.Result.GetResult<Prisma.$HistorialClinicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HistorialClinicoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HistorialClinicoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HistorialClinicoClient<runtime.Types.Result.GetResult<Prisma.$HistorialClinicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HistorialClinicoFindManyArgs>(args?: Prisma.SelectSubset<T, HistorialClinicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HistorialClinicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HistorialClinicoCreateArgs>(args: Prisma.SelectSubset<T, HistorialClinicoCreateArgs<ExtArgs>>): Prisma.Prisma__HistorialClinicoClient<runtime.Types.Result.GetResult<Prisma.$HistorialClinicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HistorialClinicoCreateManyArgs>(args?: Prisma.SelectSubset<T, HistorialClinicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HistorialClinicoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HistorialClinicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HistorialClinicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HistorialClinicoDeleteArgs>(args: Prisma.SelectSubset<T, HistorialClinicoDeleteArgs<ExtArgs>>): Prisma.Prisma__HistorialClinicoClient<runtime.Types.Result.GetResult<Prisma.$HistorialClinicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HistorialClinicoUpdateArgs>(args: Prisma.SelectSubset<T, HistorialClinicoUpdateArgs<ExtArgs>>): Prisma.Prisma__HistorialClinicoClient<runtime.Types.Result.GetResult<Prisma.$HistorialClinicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HistorialClinicoDeleteManyArgs>(args?: Prisma.SelectSubset<T, HistorialClinicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HistorialClinicoUpdateManyArgs>(args: Prisma.SelectSubset<T, HistorialClinicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HistorialClinicoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HistorialClinicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HistorialClinicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HistorialClinicoUpsertArgs>(args: Prisma.SelectSubset<T, HistorialClinicoUpsertArgs<ExtArgs>>): Prisma.Prisma__HistorialClinicoClient<runtime.Types.Result.GetResult<Prisma.$HistorialClinicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HistorialClinicoCountArgs>(args?: Prisma.Subset<T, HistorialClinicoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HistorialClinicoCountAggregateOutputType> : number>;
    aggregate<T extends HistorialClinicoAggregateArgs>(args: Prisma.Subset<T, HistorialClinicoAggregateArgs>): Prisma.PrismaPromise<GetHistorialClinicoAggregateType<T>>;
    groupBy<T extends HistorialClinicoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HistorialClinicoGroupByArgs['orderBy'];
    } : {
        orderBy?: HistorialClinicoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HistorialClinicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorialClinicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HistorialClinicoFieldRefs;
}
export interface Prisma__HistorialClinicoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cita<T extends Prisma.CitaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CitaDefaultArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HistorialClinicoFieldRefs {
    readonly id: Prisma.FieldRef<"HistorialClinico", 'Int'>;
    readonly peso: Prisma.FieldRef<"HistorialClinico", 'Decimal'>;
    readonly altura: Prisma.FieldRef<"HistorialClinico", 'Decimal'>;
    readonly diagnostico: Prisma.FieldRef<"HistorialClinico", 'String'>;
    readonly tratamiento: Prisma.FieldRef<"HistorialClinico", 'String'>;
    readonly id_cita: Prisma.FieldRef<"HistorialClinico", 'Int'>;
}
export type HistorialClinicoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialClinicoSelect<ExtArgs> | null;
    omit?: Prisma.HistorialClinicoOmit<ExtArgs> | null;
    include?: Prisma.HistorialClinicoInclude<ExtArgs> | null;
    where: Prisma.HistorialClinicoWhereUniqueInput;
};
export type HistorialClinicoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialClinicoSelect<ExtArgs> | null;
    omit?: Prisma.HistorialClinicoOmit<ExtArgs> | null;
    include?: Prisma.HistorialClinicoInclude<ExtArgs> | null;
    where: Prisma.HistorialClinicoWhereUniqueInput;
};
export type HistorialClinicoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialClinicoSelect<ExtArgs> | null;
    omit?: Prisma.HistorialClinicoOmit<ExtArgs> | null;
    include?: Prisma.HistorialClinicoInclude<ExtArgs> | null;
    where?: Prisma.HistorialClinicoWhereInput;
    orderBy?: Prisma.HistorialClinicoOrderByWithRelationInput | Prisma.HistorialClinicoOrderByWithRelationInput[];
    cursor?: Prisma.HistorialClinicoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HistorialClinicoScalarFieldEnum | Prisma.HistorialClinicoScalarFieldEnum[];
};
export type HistorialClinicoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialClinicoSelect<ExtArgs> | null;
    omit?: Prisma.HistorialClinicoOmit<ExtArgs> | null;
    include?: Prisma.HistorialClinicoInclude<ExtArgs> | null;
    where?: Prisma.HistorialClinicoWhereInput;
    orderBy?: Prisma.HistorialClinicoOrderByWithRelationInput | Prisma.HistorialClinicoOrderByWithRelationInput[];
    cursor?: Prisma.HistorialClinicoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HistorialClinicoScalarFieldEnum | Prisma.HistorialClinicoScalarFieldEnum[];
};
export type HistorialClinicoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialClinicoSelect<ExtArgs> | null;
    omit?: Prisma.HistorialClinicoOmit<ExtArgs> | null;
    include?: Prisma.HistorialClinicoInclude<ExtArgs> | null;
    where?: Prisma.HistorialClinicoWhereInput;
    orderBy?: Prisma.HistorialClinicoOrderByWithRelationInput | Prisma.HistorialClinicoOrderByWithRelationInput[];
    cursor?: Prisma.HistorialClinicoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HistorialClinicoScalarFieldEnum | Prisma.HistorialClinicoScalarFieldEnum[];
};
export type HistorialClinicoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialClinicoSelect<ExtArgs> | null;
    omit?: Prisma.HistorialClinicoOmit<ExtArgs> | null;
    include?: Prisma.HistorialClinicoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HistorialClinicoCreateInput, Prisma.HistorialClinicoUncheckedCreateInput>;
};
export type HistorialClinicoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HistorialClinicoCreateManyInput | Prisma.HistorialClinicoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HistorialClinicoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialClinicoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HistorialClinicoOmit<ExtArgs> | null;
    data: Prisma.HistorialClinicoCreateManyInput | Prisma.HistorialClinicoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HistorialClinicoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HistorialClinicoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialClinicoSelect<ExtArgs> | null;
    omit?: Prisma.HistorialClinicoOmit<ExtArgs> | null;
    include?: Prisma.HistorialClinicoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HistorialClinicoUpdateInput, Prisma.HistorialClinicoUncheckedUpdateInput>;
    where: Prisma.HistorialClinicoWhereUniqueInput;
};
export type HistorialClinicoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HistorialClinicoUpdateManyMutationInput, Prisma.HistorialClinicoUncheckedUpdateManyInput>;
    where?: Prisma.HistorialClinicoWhereInput;
    limit?: number;
};
export type HistorialClinicoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialClinicoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HistorialClinicoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HistorialClinicoUpdateManyMutationInput, Prisma.HistorialClinicoUncheckedUpdateManyInput>;
    where?: Prisma.HistorialClinicoWhereInput;
    limit?: number;
    include?: Prisma.HistorialClinicoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HistorialClinicoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialClinicoSelect<ExtArgs> | null;
    omit?: Prisma.HistorialClinicoOmit<ExtArgs> | null;
    include?: Prisma.HistorialClinicoInclude<ExtArgs> | null;
    where: Prisma.HistorialClinicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.HistorialClinicoCreateInput, Prisma.HistorialClinicoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HistorialClinicoUpdateInput, Prisma.HistorialClinicoUncheckedUpdateInput>;
};
export type HistorialClinicoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialClinicoSelect<ExtArgs> | null;
    omit?: Prisma.HistorialClinicoOmit<ExtArgs> | null;
    include?: Prisma.HistorialClinicoInclude<ExtArgs> | null;
    where: Prisma.HistorialClinicoWhereUniqueInput;
};
export type HistorialClinicoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HistorialClinicoWhereInput;
    limit?: number;
};
export type HistorialClinicoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialClinicoSelect<ExtArgs> | null;
    omit?: Prisma.HistorialClinicoOmit<ExtArgs> | null;
    include?: Prisma.HistorialClinicoInclude<ExtArgs> | null;
};
