// import {  Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
// import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

// @Component({
//   selector: 'app-file-upload',
//   template: `
//    <div>
//     <span>Choose file</span>
//     <span>{{file ? file.name : 'or drag and drop file here' }}</span>
//     <input class="file-input" type="file">
//   </div>
//   `,
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: FileUploadComponent,
//       multi: true
//     }
//   ]
// })
// export class FileUploadComponent implements ControlValueAccessor {
//   @Input() progress:any;
//   onChange: any ;
//   public file: File | null = null;

//   @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
//     const file = event && event.item(0);
//     this.onChange(file);
//     this.file = file;
//   }
//   constructor( public host: ElementRef<HTMLInputElement> ) {}

//   writeValue( value: null ) {
//     // clear file input
//     this.host.nativeElement.value = '';
//     this.file = null;
//   }

//   registerOnChange( fn: Function ) {
//     this.onChange = fn;
//   }

//   registerOnTouched( fn: Function ) {
//   }
// }