import{Schema, model} from "mongoose";

const Eschemas = new Schema({
    name:{
        type:String
    },
    edad:{
        type:Number
    }
})

export const Modelo = new model("Tabla de alumnos", Eschemas)