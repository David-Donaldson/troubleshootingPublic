import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string = ''): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(result => {
      switch ((typeof result)) {
        case 'string':
          return result.toLowerCase().includes(searchText);
        case 'object':
            if(result.issue == undefined){
              return result.address.toLowerCase().includes(searchText) || result.status.toLowerCase().includes(searchText);
            }
            else if(result.address == undefined && result.status == undefined){
              return result.issue.toLowerCase().includes(searchText);
            }
            else{
              break;
            }
        default:
          break;
      }
    });
  }
}
