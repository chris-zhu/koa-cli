import { Options } from "./types";

export function build(option: Options){


    return new Promise((a,b)=>{
        console.log(option)
        setTimeout(a, 1000)
    })
}