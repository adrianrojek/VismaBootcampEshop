import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name:"customCurrencyPipe"})
export class CustomCurrencyPipe implements PipeTransform{
  transform(value: any, ...args: any[]): any {
    return `${value} $`;
  }

}
