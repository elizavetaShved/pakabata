import 'bootstrap-datepicker';
import 'bootstrap-datepicker/js/locales/bootstrap-datepicker.ru';

export default function commonDatepicker(datepicker, datepickerId) {
  console.log(datepickerId)
  $(datepicker)
    .datepicker({
      format: 'dd.mm.yyyy',
      container: datepickerId,
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
