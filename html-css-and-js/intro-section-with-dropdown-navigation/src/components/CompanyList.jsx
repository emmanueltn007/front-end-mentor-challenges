function CompanyList ({ listClass = "", itemClass = "" }) {
    return (
        <ul className={listClass}>
            <li className={itemClass}>History</li>
            <li className={itemClass}>Our Team</li>
            <li className={itemClass}>Blog</li>
        </ul>
    );
}

export default CompanyList