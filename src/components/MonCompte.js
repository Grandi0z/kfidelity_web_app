import React from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import MyTransactions from './MonCompte/MyTransactions'
import TransactionPeriod from './MonCompte/TransactionPeriod'
import PageTitle from './PageTittle'

const MonCompte = () => {
    const pageTitle = "Mon Compte";
  return (
    <div className='wrapper hold-transition light-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed'>
        <NavBar />
        <Sidebar />
        <section className="content">
            <PageTitle title={pageTitle}/>
            <div className="container-fluid">
                <TransactionPeriod />
                <MyTransactions />
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default MonCompte