
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import ApplicationList from './components/ApplicationList';
import KanbanBoard from './components/KanbanBoard';
import ApplicationModal from './components/ApplicationModal';
import AIAssistant from './components/AIAssistant';
import Analytics from './components/Analytics';
import { storageService } from './services/storageService';
import { JobApplication, User } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingApp, setEditingApp] = useState<JobApplication | null>(null);

  useEffect(() => {
    const loadedApps = storageService.getApplications();
    setApplications(loadedApps);
    
    let currentUser = storageService.getCurrentUser();
    if (!currentUser) {
      currentUser = { id: '1', email: 'user@jat.pro', fullName: 'Pro User' };
      storageService.setUser(currentUser);
    }
    setUser(currentUser);
  }, []);

  const handleAddApplication = () => {
    setEditingApp(null);
    setIsModalOpen(true);
  };

  const handleEditApplication = (app: JobApplication) => {
    setEditingApp(app);
    setIsModalOpen(true);
  };

  const handleSaveApplication = (formData: any) => {
    if (editingApp) {
      const updated = { ...editingApp, ...formData };
      storageService.updateApplication(updated);
    } else {
      storageService.addApplication(formData);
    }
    setApplications(storageService.getApplications());
    setIsModalOpen(false);
    setEditingApp(null);
  };

  const handleDeleteApplication = (id: string) => {
    if (confirm('Permanently remove this application tracking?')) {
      storageService.deleteApplication(id);
      setApplications(storageService.getApplications());
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard applications={applications} />;
      case 'applications': return <ApplicationList applications={applications} onEdit={handleEditApplication} onDelete={handleDeleteApplication} onAdd={handleAddApplication} />;
      case 'board': return <KanbanBoard applications={applications} onEdit={handleEditApplication} />;
      case 'analytics': return <Analytics applications={applications} />;
      case 'assistant': return <AIAssistant applications={applications} />;
      default: return <Dashboard applications={applications} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab} user={user}>
      {renderContent()}
      <ApplicationModal isOpen={isModalOpen} app={editingApp} onClose={() => setIsModalOpen(false)} onSave={handleSaveApplication} />
    </Layout>
  );
};

export default App;
