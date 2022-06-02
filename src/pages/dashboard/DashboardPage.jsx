import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSalesReportAction } from "../../actions/reportsActions";
import IndicatorsCards from "../../components/dashboard/IndicatorsCards";
import OptionsFilters from "../../components/dashboard/OptionsFilters";
import { AdjustmentsIcon } from "@heroicons/react/outline";

const DashboardPage = () => {
    const dispatch = useDispatch();
    const [showFilters, setShowFilters] = useState(false);
    const filters = useSelector(({ reports }) => reports.filters);

    useEffect(() => {
        (() => dispatch(getSalesReportAction(filters)))();
    }, [filters]);

    return (
        <div className="container mx-auto">
            <div className="pb-3">
                <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
                <p className="text-gray-800">
                    Principales indicadores de su empresa
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="">
                    {showFilters ? (
                        <OptionsFilters setShowFilters={setShowFilters} />
                    ) : (
                        <button
                            className="py-1 px-3 bg-slate-700 text-white rounded-md flex gap-2 hover:bg-indigo-800 cursor-pointer items-center"
                            onClick={() => setShowFilters(true)}
                        >
                            <AdjustmentsIcon className="h-5 w-5" />
                            Filtros
                        </button>
                    )}
                </div>
                <div className="grid lg:grid-cols-8 grid-cols-1 gap-4">
                    <div className="lg:col-span-10">
                        <IndicatorsCards />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
