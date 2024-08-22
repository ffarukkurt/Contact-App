import { useState } from 'react'

const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {
    // aşağıdaki gösterimde bir sürü öğrem olmş olsaydı saçma olurdu o yüzden yukarıda tanımlama yapıyoruz.
    // aşağıdaki set formu da değiştiriyoruz
    // const [form, setForm] = useState({ fullname: "", phone_number: "" });
    const [form, setForm] = useState(initialFormValues);
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }

        addContact([...contacts, form]);

        //atama yaptıktan sonra tekrar boşluğa çekmek için
        // setForm({ fullname: "", phone_number: "" });
        setForm(initialFormValues);

        console.log(form);
    }


    return (
        //form etiketinin varsayılan olarak sayfayı yenilemesini engellemek lazım.
        <form onSubmit={onSubmit}>
            <div>
                <input name='fullname' placeholder='Full Name' value={form.fullname} onChange={onChangeInput} />
            </div>
            <div>
                <input name='phone_number' placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput} />
            </div>
            <div className='btn'>
                <button >Add</button>
            </div>
        </form>
    )
}

export default Form