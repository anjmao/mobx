import { observable, autorun, toJS, runInAction, computed } from "mobx";
import {
  serializable,
  list,
  object,
  deserialize
} from "serializr";

// toJS
// serializable and deserialize

// FORM
// -- SUBFORM 1
// ---- FIELD 1
// ---- FIELD 2
// -- SUBFORM 2
// ---- FIELD 1
// ---- FIELD 2

enum FieldType {
  Text = "text",
  Number = "number",
  Checkbox = "checkbox"
}
type FieldValue = string | number | boolean;

class Field {
  @serializable id: number;
  @serializable type: FieldType;
  @serializable @observable isActive: boolean;
  @serializable @observable value: FieldValue;

  constructor(f: { type: FieldType; isActive?: boolean; value?: FieldValue }) {
    if (!f) {
      return;
    }
    this.id = Math.random();
    this.type = f.type;
    this.isActive = f.isActive;
    this.value = f.value;
  }
}

class SubForm {
  @serializable id: number;
  @serializable title: string;
  @serializable(list(object(Field))) @observable fields: Field[];

  constructor(f: { title: string; fields: Field[] }) {
    if (!f) {
      return;
    }
    this.id = Math.random();
    this.title = f.title;
    this.fields = f.fields;
  }
}

class Form {
  @serializable id: number;
  @serializable title: string;
  @serializable(list(object(SubForm))) @observable subForms: SubForm[];

  @serializable customVal: string;

  constructor(f: { title: string; subForms: SubForm[] }) {
    if (!f) {
      return;
    }
    this.id = Math.random();
    this.title = f.title;
    this.subForms = f.subForms;
  }
}

const orderForm = new Form({
  title: "Shopping form",
  subForms: [
    new SubForm({
      title: "Order details",
      fields: [
        new Field({ type: FieldType.Checkbox }),
        new Field({ type: FieldType.Number })
      ]
    }),
    new SubForm({
      title: "Contact details",
      fields: [
        new Field({ type: FieldType.Text }),
        new Field({ type: FieldType.Checkbox })
      ]
    })
  ]
});

// autorun(() => {
//   const formJSON = toJS(orderForm);
//   console.log(formJSON);

//   const form = deserialize(Form, formJSON);
//   console.log(form);
// });

// runInAction(() => {
//   orderForm.subForms[0].fields[0].value = false;
// });

// runInAction(() => {
//   orderForm.subForms[1].fields[0].value = "Vilnius";
// });

// createModelSchema(Form, {}, context => {
//   return new Form(context.args.data);
// });
