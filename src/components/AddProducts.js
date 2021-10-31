import React,{useState} from 'react';
import { storage,db } from '../config/Config';
import ClockLoader from "react-spinners/ClockLoader";

export const AddProducts = () => {
    const [productName,setProductName] = useState('');
    const [productPrice,setProductPrice] = useState(0);
    const [productImage,setProductImage] = useState(null);
    const [error,setError] = useState('');
    const [uploadingTerminate,setUploadingTerminate] = useState('Terminate');

    const types = ['image/png','image.jpeg','image/jpg'];//image types

    //product handler
    const productImghandler = (e)=>{
        let selectedfile = e.target.files[0];
        if(selectedfile && types.includes(selectedfile.type)){
            setProductImage(selectedfile);
            setError('');
        }
        else{
            setProductImage(null);
            setError('Please select a valid image type png of jpeg');
        }
    }

    // add products from submit event
    const addProducts = (e) =>{
        e.preventDefault();
        //console.log(productName,productPrice,productImage);
        //storing the image
        const uploadTask = storage.ref(`product-images/${productImage.name}`).put(productImage);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log(progress);
            if(progress !== 100){
                setUploadingTerminate('');
            }
            else{
                setUploadingTerminate('Terminate');
            }
        }, err => setError(err.message)
            , () => {
                //getting product url and if success then storing the product in db
                storage.ref('product-images').child(productImage.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductName: productName,
                        ProductPrice: Number(productPrice),
                        ProductImage: url
                    }).then(() => {
                        setProductName('');
                        setProductPrice(0)
                        setProductImage('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })

    }

    return (
        <div className='container'>
            <br/>
            <h2>Add Products</h2>
            <hr/>
            { uploadingTerminate && 
                <form autoComplete="off" className='form-group' onSubmit={addProducts}>

                <label htmlFor='product-name'>Product Name</label>
                <br/>
                <input type='text' className='form-control' required placeholder='Product Name'
                    onChange={(e)=>setProductName(e.target.value)} value={productName} />
                <br/>

                <label htmlFor='product-price'>Product Price</label>
                <br/>
                <input type='number' className='form-control' required 
                    onChange={(e)=>setProductPrice(e.target.value)} value={productPrice} />
                <br/>
                <label htmlFor='product-img'>Product Image</label>
                <br/>
                <input type='file' className='form-control' onChange={productImghandler} id='file' />
                <br/>
                <button className='btn btn-success btn-md mybtn'>ADD</button>

            </form>
            }
            { !uploadingTerminate && <ClockLoader color='#36D7B7'  size={300} /> }
            {error&&<span>{error}</span>}
        </div>
    )
}
