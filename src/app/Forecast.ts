export class Forecast{
    constructor(
        public name: string,
        public icon : string,
        public avgtemp_c: number,
        public date: number,
        public is_day: string,
        public mintemp: number,
        public maxtemp:number
    ) {}
   

}