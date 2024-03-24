import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((value: any) => {
      return (value.name.toLocaleLowerCase().includes(args.toLowerCase())) || (value.slug.toLocaleLowerCase().includes(args.toLowerCase()));
    })

  }
}
