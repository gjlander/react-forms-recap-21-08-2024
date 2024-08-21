import './App.css';
import SignUpForm from './components/SignUpForm';
import SearchFormSubmit from './components/SearchFormSubmit';

function App() {
    return (
        <div className='p-8'>
            <h1 className='text-6xl text-center mb-8'>Forms! In React!</h1>
            <SearchFormSubmit />
            <SignUpForm />
        </div>
    );
}

export default App;
