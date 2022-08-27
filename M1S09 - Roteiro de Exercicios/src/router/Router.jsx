import { Menu } from '@pages'
import { Routes, Route, Navigate } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="*" element={<Navigate to={'/'} replace={true} />} />
    </Routes>
  )
}
