function Home({data, setToken}){
    const handleLogOut = () => {
        setToken(null)
    }
    return (
        <div>
            <button className="btn-dark" onClick={handleLogOut}>Log out</button>
        </div>
    )
}

export default Home;