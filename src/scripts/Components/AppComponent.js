var appComponent={
    template:`
            <nav>
                <a ui-sref="home">home</a>
                <a ui-sref="about">about</a>
                <a ui-sref="add">Add</a>
            </nav>
            <div ui-view>
            </div>     
    `
}
export default appComponent;