import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSexFromValue'
})
export class GetSexFromValuePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if(value == "m"){return "Uomo"}
    if(value == "f"){return "Donna"}
    return "Non specificato"
  }

}
