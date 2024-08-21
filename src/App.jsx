import './App.css';
import SignUpForm from './components/SignUpForm';
import SearchFormSubmit from './components/SearchFormSubmit';
import SearchType from './components/SearchType';

function App() {
    return (
        <div className='p-8'>
            <h1 className='text-6xl text-center mb-8'>Forms! In React!</h1>
            <SearchFormSubmit />
            <SearchType />
            <SignUpForm />
        </div>
    );
}

export default App;
