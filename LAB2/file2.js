import{readFile} from "fs/promises";

const readData = (filename) =>{
    const content = await readFile(filename,'utf-8');
    return content;


}
const writeData = (filename,content)=>{

}
const appendata = (filename,content)=>{
    
}