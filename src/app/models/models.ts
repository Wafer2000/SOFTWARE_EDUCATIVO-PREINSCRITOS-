export interface UsuariosIns{
    nombres: string, 
    apellidos: string, 
    email: string,
    password: string, 
    fechanacimiento: string,
    foto: string,
    numidenti: string,
    uid: string,
    tiempo: Date,
    completado?: boolean
}

export interface PreguntasIns{
    preg: string,
    id: number,
    tiempo: Date
}

export interface OpcionesIns{
    id: string,
    estado: boolean,
    text: string,
    name: string,
    disabled: boolean,
    checked: boolean,
}

export interface RespuestaIns{
    uid: string,
    nombres: string,
    apellidos: string,
    resp1: string, 
    resp2: string, 
    resp3: string, 
    resp4: string, 
    resp5: string, 
    resp6: string, 
    resp7: string, 
    resp8: string, 
    resp9: string, 
    resp10: string,
    fecha: string,
    hora: string,
    tiempo: Date,
}