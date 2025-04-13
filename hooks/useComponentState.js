'use client'

import { useState, useCallback, useEffect } from 'react'

/**
 *
 * @param {Function} initFn
 * @returns {Object}
 */
export function useComponentState(initFn) {
	const [isMounted, setIsMounted] = useState(false)
	const [isInitialized, setIsInitialized] = useState(false)

	useEffect(() => {
		setIsMounted(true)

		const initialize = async () => {
			if (initFn) {
				try {
					await initFn()
				} catch (error) {
					console.error('Initialization error:', error)
				}
			}
			setIsInitialized(true)
		}

		initialize()

		return () => {
			setIsMounted(false)
			setIsInitialized(false)
		}
	}, [initFn])

	const waitForMount = useCallback(async () => {
		if (isMounted) return true
		return new Promise(resolve => {
			const check = () => {
				if (isMounted) {
					resolve(true)
				} else {
					requestAnimationFrame(check)
				}
			}
			check()
		})
	}, [isMounted])

	return {
		isMounted,
		isInitialized,
		waitForMount,
	}
}
