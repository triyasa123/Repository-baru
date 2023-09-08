import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
constructor(){ }
ngOnInit(): void {
}
course=[
    {'id':1,'name':'Arduino','description':'Arduino adalah pengendali mikro dengan papan tunggal yang berfungsi dalam proyek perangkat lunak sumber terbuka. Fungsi utama dari Arduino untuk memudahkan penggunaan elektronik dalam berbagai bidang. Arduino memiliki perangkat keras yang menggunakan prosesor Atmel AVR.','image': '../../assets/arduino.jpg'},
  {'id':2,'name':' Node MCU ESP8266','description':'NodeMCU merupakan perangkat komputer IoT murah. Sebelumya dijalankan pada SoC Wi-Fi ESP8266 berasal dari Sistem Espressif, dan perangkat keras yang didasarkan pada modul ESP-12. Belakangan, dukungan untuk MCU ESP32 32-bit ditambahkan.','image': '../../assets/nodemcu.jpg'},
  {'id':3,'name':'Internet of Things','description':'Internet untuk Segala merupakan sebuah konsep yang bertujuan untuk memperluas manfaat dari konektivitas internet yang tersambung secara terus-menerus. Adapun kemampuan seperti berbagi data, remote control, dan sebagainya, termasuk juga pada benda di dunia nyata.','image': '../../assets/iot.jpg'},
  {'id':4,'name':'Blynk','description':'Blynk adalah aplikasi untuk iOS dan OS Android untuk mengontrol Arduino,NodeMCU,Raspberry Pi dan sejenisnya melalui Internet. Aplikasi ini dapat digunakan untuk mengendalikan perangkat hardware,menampilkan data sensor, menyimpan data,visualisasi, dan lain-lain.','image': '../../assets/blynk.png'}

]
}
