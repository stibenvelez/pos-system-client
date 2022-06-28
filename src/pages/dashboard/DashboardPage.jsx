import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSalesReportAction } from "../../redux/reports/reports.action";
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
                            className="flex items-center gap-2 px-3 py-1 text-white rounded-md cursor-pointer bg-slate-700 hover:bg-indigo-800"
                            onClick={() => setShowFilters(true)}
                        >
                            <AdjustmentsIcon className="w-5 h-5" />
                            Filtros
                        </button>
                    )}
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-8">
                    <div className="lg:col-span-10">
                        <IndicatorsCards />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
