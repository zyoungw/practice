
import("./index.css")
import("./index.json")
import("./logo.png")
import { add } from "./other.js" //es module
console.log('webpack helqlllo')

import axios from 'axios' axios.get('http://localhost:9092/api/info').then(res=>{
console.log(res) })
})