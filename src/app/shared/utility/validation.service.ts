/**
 *
 * Service for handeling custom validation.
 *
 * @author Ørjan Ertkjern
 *
 */
import {Injectable} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

@Injectable()
export class ValidatorService {

  constructor() {
  }

  private static mod11OfNumberWithControlDigit(input: any) {
    let controlNumber = 2;
    let sumForMod = 0;

    for (let i = input.toString().length - 2; i >= 0; --i) {
      sumForMod += input.toString().charAt(i) * controlNumber;
      if (++controlNumber > 7) {
        controlNumber = 2;
      }
    }
    const result = (11 - sumForMod % 11);
    return result === 11 ? 0 : result;
  }


  /**
   * Validate if from control has a valid email address.
   * @param control
   * @returns {any} null if everything is OK or a json with error
   */
  emailValidator(control: FormControl) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if ((control.value !== '' && control.value !== null) && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return {'incorrectMailFormat': true};
    }
    return null;
  }

  /**
   * Check if input is a valid number
   *
   * @param input
   * @returns {boolean}
   */
  isNumber(input: string) {
    const pattern = /^[0-9]+$/;
    if (!pattern.test(input)) {
      return false;
    }
    return true;
  }

  /**
   * Check if input is a valid number as formbuilder
   *
   * @param input
   * @returns {boolean}
   */
  isValidPhoneFormBuilder(control: FormControl) {
    const pattern = /^-?[0-9]*$/;
    if ((control.value !== '' && control.value !== null) && (control.value.length !== 8 || !pattern.test(control.value))) {
      return {'isInvalidPhone': true};
    }
    return null;
  }


  /**
   *  Form Builder
   *  @Input input: string to validate
   */
  isValidPasswordFormBuilder(control: FormControl) {
    const CAPITAL = /.*[A-Z].*/;
    const LOWER_CASE = /.*[a-z].*/;
    const DIGIT = /\d/;
    const input = control.value;
    if (input) {
      if (input.length < 8) {
        return {'invalidPasswordFormat': true};
      }
      if (!CAPITAL.test(input)) {
        return {'invalidPasswordFormat': true};
      }
      if (!LOWER_CASE.test(input)) {
        return {'invalidPasswordFormat': true};
      }
      if (!DIGIT.test(input)) {
        return {'invalidPasswordFormat': true};
      }
    }
    return null;
  }

  isValidPersonalNumber(control: FormControl) {
    let personalNumber = control.value;
    personalNumber = personalNumber.toString().replace(/\./g, '');
    personalNumber = personalNumber.toString().replace(/ /g, '');
    if (personalNumber) {
      if (!isNaN(personalNumber)) {
        if (!personalNumber) {
          return {'invalidAccountNumber': true};
        }
        if (personalNumber.toString().length !== 11) {
          return {'invalidAccountNumber': true};
        }
        if (parseInt(personalNumber.charAt(personalNumber.length - 1), 10) ===
          ValidatorService.mod11OfNumberWithControlDigit(personalNumber)) {
          return null;
        } else {
          return {'invalidAccountNumber': true};
        }
      } else {
        return {'invalidAccountNumber': true};
      }
    }
    return null;
  }

  matchPassword(AC: AbstractControl) {
    const password = AC.get('p' +
      'assword').value;
    const confirmPassword = AC.get('repeatPassword').value;
    if (password !== confirmPassword) {
      return {'missmatchPassword': true};
    } else {
      return null;
    }
  }


}


