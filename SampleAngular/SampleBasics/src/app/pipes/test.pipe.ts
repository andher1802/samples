import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:'testpipe'
})

export class testPipe implements PipeTransform {
  transform(value:any) {
    return value;
  }
}
