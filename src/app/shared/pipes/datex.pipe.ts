/**
 * Created by Ertkjern on 23/08/2017.
 *
 * The following PIPE is used to support the DATE | PIPE in IE 11 and below.
 * This is a current bug in the Angular Framework.
 *
 * Ref: https://github.com/angular/angular/issues/9524
 */

import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datex'
})

export class DatexPipe implements PipeTransform {
  transform(value: string, format: string = ''): string {
    if (!value || value === '') return '';
    return moment(value).format(format);
  }
}
