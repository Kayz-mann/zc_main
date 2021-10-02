import React, { useState } from 'react'

import styles from '../../styles/adminTab.module.css'

// components
import AdminSettings from '../adminSettings'
import SettingsTab from '../../components/SettingsTab'
import MembersTab from '../../components/MembersTab'
import HistoryTab from '../../components/HistoryTab'


// icon
import { FiMenu } from 'react-icons/fi';

const AdminSettingsTab = () => {
  const [openTab, setOpenTab] = useState(false);
  const [active, setActive] = useState(1)

  return (
    <div className={styles.tabWrapper}>
      <div onClick={() => setOpenTab(!openTab)} className={styles.mobileToggle}>
        <FiMenu className={styles.menuIcon} />
      </div>
      <div className={openTab ? styles.tabHeaderActive : styles.tabHeader}>
        <div
          onClick={() => {setActive(1); setOpenTab(!openTab) }}
          className={
            active === 1 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Settings
        </div>
        <div
          onClick={() => {setActive(2); setOpenTab(!openTab) }}
          className={
            active === 2 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Permissions
        </div>
        <div
          onClick={() => {setActive(3); setOpenTab(!openTab)}}
          className={
            active === 3 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Authentication
        </div>
        <div
          onClick={() => {setActive(4); setOpenTab(!openTab)}}
          className={
            active === 4 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Attachment
        </div>
      </div>
      <div className={styles.tabContent}>
        {active === 1 && <AdminSettings setActive={setActive} setOpenTab={setOpenTab} openTab={openTab} />}
        {active === 2 && <HistoryTab />}
        {active === 3 && <SettingsTab />}
        {active === 4 && <MembersTab />}
      </div>
    </div>
  )
}

export default AdminSettingsTab