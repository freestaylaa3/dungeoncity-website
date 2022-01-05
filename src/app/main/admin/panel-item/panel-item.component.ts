import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ItemType } from 'src/app/models/itemType';
@Component({
  selector: 'app-panel-item',
  templateUrl: './panel-item.component.html',
  styleUrls: ['./panel-item.component.css'],
})
export class PanelItemComponent implements OnInit {
  constructor(private itemService: ItemService, private fb: FormBuilder) {}

  searchText;
  type: ItemType = {
    itemTypeId: 0,
    itemTypeName: 'string',
    isEquipable: true,
  };

  item: Item = {
    itemId: 0,
    itemName: '',
    itemDescription: '',
    itemTypeId: 0,
    itemPrice: 0,
    itemRarity: 0,
    basePhysical: 0,
    baseMagical: 0,
    itemType: new ItemType(),
  };
  addItemForm = this.fb.group({
    itemId: [0],
    itemName: ['', Validators.required],
    itemDescription: ['', Validators.required],
    itemTypeId: [0, Validators.required],
    itemPrice: [0, Validators.required],
    itemRarity: [0, Validators.required],
    basePhysical: [0, Validators.required],
    baseMagical: [0, Validators.required],
    itemType: [this.type],
  });

  editItemForm = this.fb.group({
    itemId: [0],
    itemName: ['', Validators.required],
    itemDescription: ['', Validators.required],
    itemTypeId: [0, Validators.required],
    itemPrice: [0, Validators.required],
    itemRarity: [0, Validators.required],
    basePhysical: [0, Validators.required],
    baseMagical: [0, Validators.required],
    itemType: [this.type],
  });

  items: Item[] = [];
  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
    });
  }

  addItem() {
    if (confirm('Eşyayı eklemek istediğinize emin misiniz?') == true) {
      this.item = this.addItemForm.value;
      console.log(this.item);
      setTimeout(() => {
        window.location.reload();
      }, 500);
      this.itemService.addItem(this.item);
    }
  }

  deleteItem(id: number) {
    if (confirm('Eşyayı silmek istediğinize emin misiniz?') == true) {
      this.itemService.getItemById(id).subscribe((data) => {
        this.itemService.deleteItem(data);
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }

  search() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("itemTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  loadEditItem(id: number) {
    this.itemService.getItemById(id).subscribe((data) => {
      this.editItemForm.setValue({
        itemId: data.itemId,
        itemName: data.itemName,
        itemDescription: data.itemDescription,
        itemPrice: data.itemPrice,
        itemRarity: data.itemRarity,
        itemTypeId: data.itemTypeId,
        baseMagical: data.baseMagical,
        basePhysical: data.basePhysical,
        itemType: this.type,
      });

      console.log(this.editItemForm.value);
    });
  }

  editItem(id) {
    if (confirm('Değişiklikleri kabul ediyor musunuz?') == true) {
      this.itemService.getItemById(id).subscribe((data) => {
        data = this.editItemForm.value;
        this.itemService.editItem(data);
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }
}
