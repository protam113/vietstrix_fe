'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';

import Image from 'next/image';
import { FeatureFive, FeatureThree } from '@/components/block/cardAi';
import { DesButton } from '@/components/block/desButton';

export function NavigationItems({ isScrolling }: { isScrolling: boolean }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/our-team" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger isScrolling={isScrolling}>
            Our Team
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="group flex h-full w-full select-none bg-[#013162] flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:bg-[#02407D] focus:shadow-md"
                    href="/our-team"
                  >
                    <Image
                      src="/logo.svg"
                      alt="logo"
                      width={40}
                      height={40}
                      className="transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium transition-colors duration-300 group-hover:text-white">
                      VietStrix
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground transition-opacity duration-300 group-hover:opacity-80">
                      A passionate team dedicated to building high-quality,
                      modern websites with cutting-edge technology.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/deliver" title="How do we deliver?">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/our-projects" title="Our projects">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/documentation" title="Document">
                How to install dependencies and structure your app.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger isScrolling={isScrolling}>
            Services
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <DesButton normal="All" main="Services" url="/services" />
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/services/web-development"
                title="Web Development"
              >
                Web development with cutting-edge technologies .
              </ListItem>
              <ListItem href="/services/ux-ui-design" title="UX/UI Design">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/services/web-revamp" title="Website Revamp">
                Enhance your website with a modern, high-performance revamp
                using cutting-edge technologies.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger isScrolling={isScrolling}>
            Resource Hub
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li className="row-span-3">
                <Link href="/products">
                  <FeatureThree />
                </Link>
              </li>
              <li className="row-span-3">
                <Link href="/blogs">
                  <FeatureFive />
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({ isScrolling })}
            >
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const ListItemChild = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    title: string;
    href?: string;
    childrenItems?: { title: string; href: string; icon?: React.ReactNode }[];
  }
>(({ className, title, href, childrenItems, ...props }, ref) => {
  return (
    <li className="relative">
      {/* Mục cha */}
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            'block select-none space-y-1 text-14 rounded-md leading-none no-underline outline-none transition-colors  hover:text-[#4f87c0] focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-14 text-[#013162] hover:text-[#4f87c0] font-semibold ">
            {title}
          </div>
        </a>
      </NavigationMenuLink>

      {/* Hiển thị luôn children nếu có */}
      {childrenItems && (
        <ul className="mt-2 space-y-1 rounded-md  p-2">
          {childrenItems.map((child) => (
            <li key={child.title}>
              <a
                href={child.href}
                className="flex items-center gap-2 p-2 rounded-md transition-colors hover:bg-[#013162] hover:text-white"
              >
                {child.icon}
                <span className="text-sm">{child.title}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
});
ListItemChild.displayName = 'ListItem';
