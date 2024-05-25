"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';

const AddApp = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    description: '',
    tags: '',
    icon: null,
    thumbnail: null,
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
        <section className="flex flex-col border-2 rounded-lg p-4 gap-4">
            <h4 className='text-inherit text-start font-bold' >Information :</h4>
            <Input
            name="name"
            label="App Name"
            fullWidth
            variant="bordered"
            placeholder="Enter your app name"
            value={form.name}
            onChange={handleChange}
            isRequired
            />
            <Textarea
            name="description"
            label="Description"
            fullWidth
            variant="bordered"
            placeholder="Enter your app description"
            description="Enter a concise description of your project."
            value={form.description}
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
            required
            />
        </section>
        
        <section className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col border-2 rounded-lg p-4">
                <h4 className='text-inherit text-start py-2 font-bold'>Graphic :</h4>
                <div className="flex flex-col gap-4">
                    <Input
                    type="file"
                    name="icon"
                    label="App Icon"
                    variant="bordered"
                    onChange={handleChange}
                    isRequired
                    />
                    <Input
                    type="file"
                    name="thumbnail"
                    label="App Thumbnail"
                    variant="bordered"
                    onChange={handleChange}
                    isRequired
                    />
                </div>
            </div>
            <div className="border-2 rounded-lg p-4">
                <h4 className='text-inherit py-2 font-bold'>Files</h4>
                <Input
                type="file"
                name="File"
                label="Add File"
                variant="bordered"
                onChange={handleChange}
                />
                <h4 className='text-inherit py-2 font-bold'>
                    <span className="text-primary opacity-70">or </span>Link
                </h4>
                <Input
                name="Link"
                label="Add Link"
                variant="bordered"
                fullWidth
                placeholder="Enter file link or upload a file"
                value={form.fileOrLink}
                onChange={handleChange}
                />
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
