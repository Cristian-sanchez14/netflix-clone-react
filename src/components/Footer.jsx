const Footer = () => {
  return (
    <footer className="bg-black bg-black">
      <div></div>
      <div className="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Company
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">About</li>
            <li className="mb-4">Careers</li>
            <li className="mb-4">Brand Center</li>
            <li className="mb-4">Blog</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Help center
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">Contact Us</li>
            <li className="mb-4">888-888-8888</li>
            <li className="mb-4">Jobs</li>
            <li className="mb-4">Contact Us</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Legal
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">Privacy Policy</li>
            <li className="mb-4">Licensing</li>
            <li className="mb-4">Terms &amp; Conditions</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Creator
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">Fake Netflix</li>
            <li className="mb-4">DEVELOPER: Cristian Sanchez</li>
            <li className="mb-4">Email: Cristian.manu7@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
