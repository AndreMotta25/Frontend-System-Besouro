
export interface IProjectCard {
    projectId: string;
    projectLogo: string | null;
    name: string;
    progressValue: number;
    accentColor: string;
    secondAccentColor: string;
    values?: {
        subscribers?: number;
        incubateds?: number;
        budget?: number;
        amountSpent?: number;
    };
    icons?: React.ReactNode[];
}

export interface IBudgetProjectDetails {
    totalExpenses: number,
    mensalValues: number[],
    percentualExpenses: number[],
    totalAmount: number,
    totalPercent: number,
    color: string,
    monthValues : any,
}

