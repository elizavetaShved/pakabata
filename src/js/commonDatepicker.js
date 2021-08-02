import 'bootstrap-datepicker';
import 'bootstrap-datepicker/js/locales/bootstrap-datepicker.ru';

export default function commonDatepicker(datepicker) {
  $(datepicker)
    .datepicker({
      format: 'mm.dd.yyyy',
      container: '.gl-datepicker-container',
      language: 'ru',
      autoclose: true
    })
    // .on('show', () => {
    //   datepicker.classList.add('commonDatepicker-shown')
    // })
    // .on('hide', () => {
    // datepicker.classList.remove('commonDatepicker-shown')
  // });
}
