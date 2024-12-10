"use client";

import App from "./App";
import Greeting from "./Greetings";
import Counter from "./Counter";
import ProductList from "./ProductList";
import UserList from "./UserList";
import Parent from "./Parent";
import ToggleSwitch from "./ToggleSwitch";
import ToDoList from "./ToDoList";
import Counter2 from "./Counter2";
import LoginControl from "./LoginControl";
import ProductStock from "./ProductStock";
import ContactForm from "./ContactForm";
import ShoppingList from "./ShoppingList";
import Dropdown from "./Dropdown";
import ImageGallery from "./ImageGallery";

const productStockProps = {
    inStock: true,
};

const dropDownOptions = ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"];

export default function Home() {
    return (
        <div>
            <h1>Ejercicio 1 (Greeting)</h1>
            <br />
            <Greeting name="Manuel" />
            <br />
            <h1>Ejercicio 2 (App)</h1>
            <br />
            <App />
            <br />
            <h1>Ejercicio 3 (Counter)</h1>
            <br />
            <Counter />
            <br />
            <h1>Ejercicio 4 (ProductList)</h1>
            <br />
            <ProductList />
            <br />
            <h1>Ejercicio 5(UserList)</h1>
            <br />
            <UserList />
            <br />
            <h1>Ejercicio 6(Parent)</h1>
            <br />
            <Parent />
            <h1>Ejercicio 7(ToggleSwitch)</h1>
            <br />
            <ToggleSwitch />
            <br />
            <h1>Ejercicio 8(ToDoList)</h1>
            <br />
            <ToDoList />
            <h1>Ejercicio 9(Counter)</h1>
            <br />
            <Counter2 />
            <h1>Ejercicio 10(LoginControl)</h1>
            <br />
            <LoginControl />
            <br />
            <h1>Ejercicio 11(ProductStock)</h1>
            <br />
            <ProductStock product={productStockProps} />
            <br />
            <h1>Ejercicio 12(ContactForm)</h1>
            <br />
            <ContactForm />
            <br />
            <h1>Ejercicio 13(ShoppingList)</h1>
            <br />
            <ShoppingList />
            <br />
            <h1>Ejercicio 14(Dropdown)</h1>
            <br />
            <Dropdown options={dropDownOptions} />
            <br />
            <h1>Ejercicio 15(ImageGallery)</h1>
            <br />
            <ImageGallery />
        </div>
    );
}
