"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';

const AddApp = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    description: '',
    detail: '',
    instructions: '',
    tags: '',
    owner: '',
    icon: null,
    thumbnail: null,
    file: null,
    fileOrLink: '',
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex flex-col mx-auto px-4 py-8 mt-10">
    <>
      <h2 className="text-inherit font-bold mb-4">Add Your App</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <section className="flex flex-col gap-1 rounded-lg items-start">
          <h3 className='text-inherit text-start font-bold'>Name :</h3>
          <Input
            name="name"
            // label="App Name"
            fullWidth
            variant="bordered"
            placeholder="Enter your app name"
            value={form.name}
            onChange={handleChange}
            isRequired
            />
          <h3 className='text-inherit text-start font-bold mt-2'>Add Link :</h3>
            <Input
              name="Link"
              variant="bordered"
              fullWidth
              placeholder="Enter file link or upload a file"
              value={form.fileOrLink}
              onChange={handleChange}
              />
        </section>

        <section className="flex flex-col border-4 rounded-lg p-4 gap-4">
            <h4 className='text-inherit text-start font-bold' >Information :</h4>
            <Textarea
            name="description"
            label="Description"
            fullWidth
            variant="bordered"
            placeholder="Enter short description"
            value={form.description}
            onChange={handleChange}
            isRequired
            />
            <Textarea
            name="detail"
            label="Details"
            fullWidth
            variant="bordered"
            placeholder="Add your app details"
            minRows={20}
            // description="Enter a concise description of your project."
            value={form.detail}
            onChange={handleChange}
            isRequired
            />
            <h4 className='text-inherit text-start font-bold' >Mini instruction :</h4>
            <Textarea
            name="instructions"
            label="instructions"
            fullWidth
            variant="bordered"
            placeholder="How to play this app"
            value={form.instructions}
            onChange={handleChange}
            isRequired
            />
            <Input
            name="tags"
            label="Tags"
            fullWidth
            placeholder="Enter tags separated by commas"
            value={form.tags}
            onChange={handleChange}
            isRequired
            />
        </section>
        
        <section className="flex flex-col md:flex-row gap-4">
          <div className='flex flex-row gap-2 md:flex-col'>
            <div className="flex flex-col border-4 rounded-lg p-4">
                <h4 className='text-inherit text-start py-2 font-bold'>Owner :</h4>
                <div className="flex flex-col gap-4">
                    <Input
                    type="file"
                    name="icon"
                    label="App Icon"
                    variant="bordered"
                    onChange={handleChange}
                    isRequired
                    />
                </div>
            </div>
            <div className="flex flex-col border-4 rounded-lg p-4">
              <h4 className='text-inherit text-start py-2 font-bold'>Contact :
                <span className='text-primary font-semibold'> (via Email)</span>
              </h4>
              <div className="flex flex-col gap-4">
                    <Input
                    name="email"
                    // label="App contact"
                    fullWidth
                    variant="bordered"
                    placeholder="i.e. cedt@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    isRequired
                    />
              </div>
            </div>
          </div>
          <div className="border-4 rounded-lg p-4 flex flex-col items-start">
                <h4 className='text-inherit py-2 font-bold'>Picture:
                  <span className='text-primary font-semibold'> (Can chosse 1-3 pics)</span>
                </h4>
                <Input
                type="file"
                name="file"
                // label="Add File"
                variant="bordered"
                onChange={handleChange}
                />       
          </div>
        </section>
        <section className='flex flex-col gap-4'>
          <div className="flex flex-col border-4 rounded-lg p-4">
            <h4 className='text-inherit text-start py-2 font-bold'>Graphic :</h4>
            <div className="flex flex-row gap-4">
              <Input
                type="file"
                name="icon"
                label="App Icon"
                labelPlacement="outside"
                variant="bordered"
                onChange={handleChange}
                isRequired
              />
              <Input
                type="file"
                name="thumbnail"
                label="App Thumbnail"
                labelPlacement="outside"
                variant="bordered"
                onChange={handleChange}
                isRequired
              />
            </div>
          </div>
        </section>

        <div className="flex justify-between mt-6">
          <Button color="secondary" onClick={() => router.back()}>
            <p className='text-primary font-medium'>Back</p>
            </Button>
          <Button type="submit" color="primary">
            <p className="text-white font-medium">
            Create
            </p>
            </Button>
        </div>
      </form>
    </>
    </div> 
  );
};

export default AddApp;
