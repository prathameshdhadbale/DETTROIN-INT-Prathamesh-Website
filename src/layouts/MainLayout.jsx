import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TopBar + Navbar will be added in Phase 1 */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* Footer will be added in Phase 1 */}
    </div>
  );
}
