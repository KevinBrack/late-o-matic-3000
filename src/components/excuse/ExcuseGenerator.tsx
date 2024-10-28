'use client'

import React from 'react'
import { useExcuseStore } from '../../store/excuse-store'
import { ExcuseHistory } from './ExcuseHistory'
import { ExcuseCategory } from '../../types'

export const ExcuseGenerator = () => {
  const [showHistory, setShowHistory] = React.useState(false)
  const { currentExcuse, currentCategory, currentBelievabilityScore, generateExcuse, shareExcuse } = useExcuseStore()

  return React.createElement('div', { className: 'space-y-8' }, [
    React.createElement('div', {
      key: 'generator',
      className: 'glass rounded-2xl shadow-2xl p-8 relative overflow-hidden'
    }, [
      React.createElement('div', {
        key: 'background',
        className: 'absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none'
      }),
      React.createElement('div', { key: 'content', className: 'space-y-6 relative' }, [
        React.createElement('button', {
          key: 'generate',
          onClick: () => generateExcuse(),
          className: 'w-full bg-primary/90 hover:bg-primary text-primary-foreground font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg relative overflow-hidden group hover:scale-[1.02] active:scale-[0.98]'
        }, [
          React.createElement('span', { key: 'text', className: 'relative z-10' }, 'Generate Excuse'),
          React.createElement('div', {
            key: 'animation',
            className: 'absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000'
          })
        ]),
        currentExcuse && currentCategory && React.createElement('div', { key: 'excuse', className: 'space-y-4' }, [
          React.createElement('div', {
            key: 'excuse-content',
            className: 'bg-white/[0.03] backdrop-blur-md rounded-xl p-6 border border-white/[0.08]'
          }, [
            React.createElement('p', {
              key: 'excuse-text',
              className: 'text-xl text-foreground font-medium leading-relaxed'
            }, currentExcuse),
            React.createElement('div', {
              key: 'excuse-meta',
              className: 'mt-4 flex flex-wrap gap-3 items-center text-sm'
            }, [
              React.createElement('span', {
                key: 'category',
                className: 'px-3 py-1.5 bg-white/[0.03] rounded-full border border-white/[0.06]'
              }, currentCategory),
              React.createElement('span', {
                key: 'believability',
                className: 'px-3 py-1.5 bg-white/[0.03] rounded-full border border-white/[0.06]'
              }, `Believability: ${(currentBelievabilityScore * 100).toFixed(0)}%`)
            ])
          ]),
          React.createElement('button', {
            key: 'share',
            onClick: () => shareExcuse(),
            className: 'w-full bg-secondary/80 hover:bg-secondary text-secondary-foreground font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-md relative overflow-hidden group hover:scale-[1.02] active:scale-[0.98]'
          }, [
            React.createElement('span', { key: 'share-text', className: 'relative z-10' }, 'Share Excuse'),
            React.createElement('div', {
              key: 'share-animation',
              className: 'absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000'
            })
          ])
        ])
      ])
    ]),
    React.createElement('div', { key: 'history-toggle', className: 'flex justify-center' }, 
      React.createElement('button', {
        onClick: () => setShowHistory(!showHistory),
        className: 'glass glass-hover text-muted-foreground hover:text-foreground px-6 py-2 rounded-xl transition-all duration-200 font-medium border border-white/[0.08] shadow-lg hover:scale-[1.02] active:scale-[0.98]'
      }, showHistory ? 'Hide History' : 'Show History')
    ),
    showHistory && React.createElement(ExcuseHistory, { key: 'history' })
  ])
}
