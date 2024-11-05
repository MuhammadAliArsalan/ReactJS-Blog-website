const NewPost = ({
    handleSubmit,
    postTitle,
    setPostTitle,
    postBody,
    setPostBody,
  }) => {
    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '2rem',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };
  
    const inputStyle = {
      marginBottom: '1rem',
      padding: '0.8rem',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1rem',
    };
  
    const buttonStyle = {
      padding: '0.8rem',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
    };
  
    const buttonHoverStyle = {
      backgroundColor: '#0056b3',
    };
  
    return (
      <main className="NewPost">
        <h2 style={{ textAlign: 'center' }}>New Post</h2>
        <form
          className="newPostForm"
          onSubmit={handleSubmit}
          style={formStyle}
        >
          <label htmlFor="postTitle">Title:</label>
          <input
            id="postTitle"
            type="text"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            style={inputStyle}
          />
          <label htmlFor="postBody">Post:</label>
          <textarea
            id="postBody"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            style={{ ...inputStyle, height: '150px' }}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Submit
          </button>
        </form>
      </main>
    );
  };
  
  export default NewPost;
  