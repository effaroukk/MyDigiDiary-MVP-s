import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [journalEntries, setJournalEntries] = useState([]); // State to store journal entries
  const [newEntry, setNewEntry] = useState(''); // State for new journal entry

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const handleEntrySubmit = (e) => {
    e.preventDefault();
    if (newEntry.trim()) {
      setJournalEntries([...journalEntries, newEntry]);
      setNewEntry('');
    }
  };

  return (
    <div className="App" style={styles.appContainer}>
      <header style={styles.header}>
        <nav style={styles.navbar}>
          <h1 style={styles.title}>My Digital Diary</h1>
          <div style={styles.navLinks}>
            <a href="#home" style={styles.navLink}>Home</a>
            {!isLoggedIn && <button style={styles.button} onClick={handleLogin}>Login</button>}
            {!isLoggedIn && <button style={styles.button}>Sign Up</button>}
            {isLoggedIn && <button style={styles.button} onClick={handleLogout}>Logout</button>}
          </div>
        </nav>
      </header>

      <main style={styles.mainContent}>
        {isLoggedIn ? (
          <div style={styles.diarySection}>
            <h2>Welcome Back!</h2>
            <p>Start writing your thoughts below:</p>
            <form onSubmit={handleEntrySubmit} style={styles.entryForm}>
              <textarea
                style={styles.textArea}
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                placeholder="Write your journal entry here..."
              />
              <button type="submit" style={styles.submitButton}>Add Entry</button>
            </form>

            {journalEntries.length > 0 && (
              <div style={styles.entriesSection}>
                <h3>Your Journal Entries</h3>
                <ul style={styles.entryList}>
                  {journalEntries.map((entry, index) => (
                    <li key={index} style={styles.entryItem}>{entry}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div style={styles.guestSection}>
            <h2>Welcome to My Digital Diary</h2>
            <p>Capture your thoughts, memories, and daily reflections with ease. My Digital Diary provides a secure and user-friendly platform for journaling, mood tracking, and personal growth. Whether you are documenting everyday moments or special events, our app offers a private space where you can reflect, organize, and express yourself freely.</p>
          </div>
        )}
      </main>

      <footer style={styles.footer}>
        <div style={styles.socialLinks}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            LinkedIn
          </a>
        </div>
        <p>© {new Date().getFullYear()} All rights reserved | Created by Effaroukk</p>
      </footer>
    </div>
  );
}

const styles = {
  appContainer: {
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    width: '100%',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.8rem',
    color: '#fff',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '20px',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  mainContent: {
    flex: '1',
    padding: '20px',
    width: '80%',
    maxWidth: '600px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    marginTop: '20px',
  },
  guestSection: {
    marginTop: '50px',
  },
  diarySection: {
    marginTop: '30px',
  },
  entryForm: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  textArea: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
    marginBottom: '10px',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  entriesSection: {
    marginTop: '20px',
  },
  entryList: {
    listStyleType: 'none',
    padding: '0',
  },
  entryItem: {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    textAlign: 'left',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    width: '100%',
    borderTop: '1px solid #ccc',
  },
  socialLinks: {
    marginBottom: '10px',
  },
  socialLink: {
    color: '#4CAF50',
    textDecoration: 'none',
    margin: '0 10px',
    fontWeight: 'bold',
  },
};

export default App;

