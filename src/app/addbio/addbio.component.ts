import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addbio',
  templateUrl: './addbio.component.html',
  styleUrls: ['./addbio.component.scss']
})
export class AddbioComponent implements OnInit {

  addBioForm = new FormGroup({
    artistName: new FormControl('',Validators.required),
    LPs: new FormControl(''),
    info: new FormControl('',Validators.required)
  })
  // databinding: string=this.addBioForm.value.info
  constructor() { }
  getArtistData(){
    console.log(this.addBioForm.value)
    this.addBioForm.reset()
    
  }
  ngOnInit(): void {
  }

}
