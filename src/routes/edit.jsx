import { Form, useLoaderData,redirect,useNavigate, } from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }) {
  const formData = await request.formData();
  const firstName = formData.get("first");
  const lastName = formData.get("last");
  const updates = Object.fromEntries(formData);
  updates.first;
  updates.last;
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export default function EditContact(){
  const { contact } = useLoaderData();
  const navigate = useNavigate();

  return (
   <> 
    <h1>让我康康你的浓度</h1>
    <Form method="post" id="contact-form">
      <p>
        <span>原批名</span>
        <input
          placeholder="OP"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="I'm"
          aria-label="last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>小蓝鸟</span>
        <input
          type="text"
          name="twitter"
          placeholder="@Genshit"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>来点瑟图</span>
        <input
          placeholder="我hold尼玛"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>有屁快放</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit" style={{width:'fit-content',height:'fit-content'}}>成为OP贵族</button>
        <button type="button" style={{width:'fit-content',height:'fit-content'}} 
        onClick={() => {
         navigate(-1);}}
         >
         成为一个鲁蛇</button>
      </p>
     </Form>
    </>
    );
}
          
