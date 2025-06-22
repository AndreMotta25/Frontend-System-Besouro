export enum Status{
    OK = 'ok',
    ALERT = 'alert',
    BAD = 'bad',
    PARCIAL = 'parcial'
}   

export const statusMapping: {[key: string]: Status} ={
    // finance
    'Baixado': Status.OK,
    'Proximo ao Vct': Status.ALERT,
    'Pendente': Status.BAD,
    'Parcial': Status.PARCIAL
}

export const statusCores: { [key in Status]: string } = {
    [Status.OK]: "bg-green-400 text-green-400 border-green-400",
    [Status.ALERT]: "bg-orange-400 text-orange-400 border-orange-400",
    [Status.BAD]: "bg-red-400 text-red-400 border-red-400",
    [Status.PARCIAL]: "bg-blue-400 text-blue-400 border-blue-400"
  };
