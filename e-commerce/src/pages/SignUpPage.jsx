import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axiosInstance from '../utils/axiosInstance';
import { useHistory } from 'react-router-dom';

const SignUpPage = () => {
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // Rol bilgilerini izlemek için
  const watchRole = watch('role_id');

  useEffect(() => {
    // Role bilgilerini almak için GET isteği yapılıyor
    const fetchRoles = async () => {
      try {
        const response = await axiosInstance.get('/roles');
        setRoles(response.data);
        setValue('role_id', response.data.find(role => role.name === 'Customer').id);
      } catch (error) {
        console.error('Rol bilgileri alınamadı:', error);
      }
    };

    fetchRoles();
  }, [setValue]);

  // Form gönderildiğinde çalışacak fonksiyon
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // password_confirmation alanını sil
      delete data.password_confirmation;

      if (data.role_id === '2') {
        // Store Role seçildiyse Store bilgilerini ekle
        data.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
        delete data.store_name;
        delete data.store_phone;
        delete data.store_tax_no;
        delete data.store_bank_account;
      }

      // API'ye veri gönderilmeden önce konsola yazdırarak kontrol edin
    console.log("API'ye Gönderilen Veri:", data);
    
      const response = await axiosInstance.post('/signup', data);
      alert('You need to click the link in your email to activate your account!');
      history.goBack();
    } catch (error) {
      console.error('Kayıt sırasında bir hata oluştu:', error);
      alert('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Name</label>
          <input
            {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'Name must be at least 3 characters' } })}
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Password must be at least 8 characters' },
              pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])/, message: 'Password must include lower, upper, number, and special character' }
            })}
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password Confirmation</label>
          <input
            type="password"
            {...register('password_confirmation', {
              required: 'Please confirm your password',
              validate: value => value === watch('password') || 'Passwords do not match'
            })}
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.password_confirmation && <p className="text-red-500 text-sm">{errors.password_confirmation.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Role</label>
          <select
            {...register('role_id')}
            className="border border-gray-300 p-2 w-full rounded"
          >
            {roles.map(role => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </select>
        </div>

        {watchRole === '2' && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Store Name</label>
              <input
                {...register('store_name', { required: 'Store Name is required', minLength: { value: 3, message: 'Store Name must be at least 3 characters' } })}
                className="border border-gray-300 p-2 w-full rounded"
              />
              {errors.store_name && <p className="text-red-500 text-sm">{errors.store_name.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Store Phone</label>
              <input
                {...register('store_phone', { required: 'Store Phone is required', pattern: { value: /^\+90\d{10}$/, message: 'Invalid Turkish phone number' } })}
                className="border border-gray-300 p-2 w-full rounded"
              />
              {errors.store_phone && <p className="text-red-500 text-sm">{errors.store_phone.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Store Tax ID</label>
              <input
                {...register('store_tax_no', {
                  required: 'Store Tax ID is required',
                  pattern: { value: /^T\d{4}V\d{6}$/, message: 'Tax ID must match the pattern TXXXXVXXXXXX' }
                })}
                className="border border-gray-300 p-2 w-full rounded"
              />
              {errors.store_tax_no && <p className="text-red-500 text-sm">{errors.store_tax_no.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Store Bank Account (IBAN)</label>
              <input
                {...register('store_bank_account', {
                  required: 'Store Bank Account is required',
                  pattern: { value: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/, message: 'Invalid IBAN address' }
                })}
                className="border border-gray-300 p-2 w-full rounded"
              />
              {errors.store_bank_account && <p className="text-red-500 text-sm">{errors.store_bank_account.message}</p>}
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-all duration-300`}
        >
          {loading ? 'Submitting...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
