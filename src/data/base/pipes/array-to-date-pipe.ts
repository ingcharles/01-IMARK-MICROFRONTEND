import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToDate',
  standalone: true,
})
export class ArrayToDatePipe implements PipeTransform {
  transform(value: number[]): Date | null {
    if (!value || value.length < 3) {
      return null;
    }
    console.log(value)
    const [year, month, day, hour = 0, minute = 0, second = 0, millisecond = 0] = value;
    console.log(year, month, day)
    return new Date(year, month - 1, day);
  }
}
